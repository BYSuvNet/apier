/**
 * Suvnet Connector
 * Hämtar data från https://suvnet.se/api/{resource}
 * - Orders & orderItems använder rapportens datumintervall: ?from=YYYY-MM-DD&to=YYYY-MM-DD
 */

var cc = DataStudioApp.createCommunityConnector();
var types = cc.FieldType;
var aggs  = cc.AggregationType;

function getAuthType() { return { type: "NONE" }; }
function isAdminUser() { return false; }

function getConfig() {
  var config = cc.getConfig();
  config.newInfo().setId('info')
    .setText('Välj resurs. För Orders/OrderItems används rapportens datumintervall (from/to).');

  config.newSelectSingle()
    .setId('resource')
    .setName('Resource')
    .addOption(config.newOptionBuilder().setLabel('Customers').setValue('customers'))
    .addOption(config.newOptionBuilder().setLabel('Orders').setValue('orders'))
    .addOption(config.newOptionBuilder().setLabel('Order Items').setValue('orderItems'))
    .setAllowOverride(true);

  config.setDateRangeRequired(true);
  return config.build();
}

function getFieldsForResource_(resource) {
  var f = cc.getFields();

  if (resource === 'orders') {
    f.newDimension().setId('id').setName('ID').setType(types.NUMBER);
    f.newDimension().setId('customerId').setName('Customer ID').setType(types.NUMBER);
    f.newDimension().setId('status').setName('Status').setType(types.TEXT);
    f.newDimension().setId('orderDateUtc').setName('Order Date UTC').setType(types.YEAR_MONTH_DAY);
    f.newDimension().setId('currency').setName('Currency').setType(types.TEXT);
    f.newMetric().setId('items').setName('Items Count').setType(types.NUMBER).setAggregation(aggs.SUM);
    f.newMetric().setId('totalAmount').setName('Total Amount').setType(types.NUMBER).setAggregation(aggs.SUM);
    return f;
  }

  if (resource === 'orderItems') {
    // En rad per item i orders.items
    f.newDimension().setId('orderId').setName('Order ID').setType(types.NUMBER);
    f.newDimension().setId('orderDateUtc').setName('Order Date UTC').setType(types.YEAR_MONTH_DAY);
    f.newDimension().setId('customerId').setName('Customer ID').setType(types.NUMBER);
    f.newDimension().setId('status').setName('Status').setType(types.TEXT);
    f.newDimension().setId('currency').setName('Currency').setType(types.TEXT);

    f.newDimension().setId('productId').setName('Product ID').setType(types.NUMBER);

    f.newMetric().setId('quantity').setName('Quantity').setType(types.NUMBER).setAggregation(aggs.SUM);
    f.newMetric().setId('price').setName('Unit Price').setType(types.NUMBER).setAggregation(aggs.AVG); // valfritt
    f.newMetric().setId('lineRevenue').setName('Line Revenue').setType(types.NUMBER).setAggregation(aggs.SUM);
    return f;
  }

  // default: customers
  f.newDimension().setId('id').setName('ID').setType(types.NUMBER);
  f.newDimension().setId('name').setName('Name').setType(types.TEXT);
  f.newDimension().setId('email').setName('Email').setType(types.TEXT);
  f.newDimension().setId('city').setName('City').setType(types.TEXT);
  f.newDimension().setId('country').setName('Country').setType(types.TEXT);
  f.newDimension().setId('birthDate').setName('Birthdate').setType(types.YEAR_MONTH_DAY);
  f.newDimension().setId('dateCreated').setName('Date Created').setType(types.YEAR_MONTH_DAY);
  return f;
}

function getSchema(request) {
  var resource = (request && request.configParams && request.configParams.resource) || 'customers';
  return { schema: getFieldsForResource_(resource).build() };
}

function getData(request) {
  var resource = (request && request.configParams && request.configParams.resource) || 'customers';
  var fieldsDef = getFieldsForResource_(resource);

  if (!request || !request.fields || !request.fields.length) {
    return { schema: fieldsDef.build(), rows: [] };
  }

  var requestedFieldIds = request.fields.map(function(f){ return f.name; });
  var requestedFields = fieldsDef.forIds(requestedFieldIds);

  var base = 'https://suvnet.se/api/' + (resource === 'orderItems' ? 'orders' : resource);
  var url = base;

  if (resource === 'orders' || resource === 'orderItems') {
    var dr = request.dateRange || {};
    var fromIso = yyyymmddToIso_(dr.startDate);
    var toIso   = yyyymmddToIso_(dr.endDate);
    if (fromIso && toIso) {
      url = base + '?from=' + encodeURIComponent(fromIso) + '&to=' + encodeURIComponent(toIso);
    }
  }

  var resp = UrlFetchApp.fetch(url);
  var data = JSON.parse(resp.getContentText()); // JSON-array av orders

  var rows;

  if (resource === 'orderItems') {
    // Flatten: en rad per item
    rows = [];
    data.forEach(function(o){
      if (!Array.isArray(o.items)) return;
      o.items.forEach(function(it){
        var vals = requestedFieldIds.map(function(fid){
          return mapOrderItem_(fid, o, it);
        });
        rows.push({ values: vals });
      });
    });
  } else if (resource === 'orders') {
    rows = data.map(function(o){
      var vals = requestedFieldIds.map(function(fid){
        return mapOrder_(fid, o);
      });
      return { values: vals };
    });
  } else {
    rows = data.map(function(c){
      var vals = requestedFieldIds.map(function(fid){
        return mapCustomer_(fid, c);
      });
      return { values: vals };
    });
  }

  return { schema: requestedFields.build(), rows: rows };
}

/** Mappers **/
function mapCustomer_(fid, c) {
  switch(fid) {
    case 'id':          return Number(c.id);
    case 'name':        return c.name;
    case 'email':       return c.email;
    case 'birthDate':   return toYMD_(c.birthDate);
    case 'city':        return c.city || (c.address && c.address.city);
    case 'country':     return c.country || (c.address && c.address.country);
    case 'dateCreated': return toYMD_(c.createdAt);
  }
  return null;
}

function mapOrder_(fid, o) {
  switch(fid) {
    case 'id':           return Number(o.id);
    case 'customerId':   return Number(o.customerId);
    case 'status':       return String(o.status);
    case 'items':        return Array.isArray(o.items) ? o.items.length : Number(o.items);
    case 'totalAmount':  return Number(o.totalAmount);
    case 'orderDateUtc': return toYMD_(o.orderDateUtc || o.orderDate);
    case 'currency':     return o.currency ? String(o.currency) : null;
  }
  return null;
}

function mapOrderItem_(fid, o, it) {
  switch(fid) {
    // order/metadata
    case 'orderId':       return Number(o.id);
    case 'orderDateUtc':  return toYMD_(o.orderDateUtc || o.orderDate);
    case 'customerId':    return Number(o.customerId);
    case 'status':        return String(o.status);
    case 'currency':      return o.currency ? String(o.currency) : null;
    // item
    case 'productId':     return Number(it.productId);
    case 'quantity':      return Number(it.quantity);
    case 'price':         return Number(it.price); // styckepris inkl. moms (enligt ditt exempel)
    case 'lineRevenue':   return Number(it.quantity) * Number(it.price);
  }
  return null;
}

/** Helpers **/
function toYMD_(iso) {
  if (!iso) return null;
  var d = new Date(iso);
  return Utilities.formatDate(d, 'UTC', 'yyyyMMdd');
}
function yyyymmddToIso_(yyyymmdd) {
  if (!yyyymmdd || yyyymmdd.length !== 8) return null;
  return yyyymmdd.slice(0,4) + '-' + yyyymmdd.slice(4,6) + '-' + yyyymmdd.slice(6,8);
}
