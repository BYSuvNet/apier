/**
 * Suvnet Connector
 * Hämtar data från https://suvnet.se/api/{resource} 
 */

var cc = DataStudioApp.createCommunityConnector();
var types = cc.FieldType;
var aggs  = cc.AggregationType;


function getAuthType() { return { type: "NONE" }; }

function getConfig() {
  var config = cc.getConfig();
  config.newInfo()
    .setId('info')
    .setText('Välj resurs som ska hämtas');
  config.newSelectSingle()
    .setId('resource')
    .setName('Resource')
    .addOption(config.newOptionBuilder().setLabel('Customers').setValue('customers'))
    .addOption(config.newOptionBuilder().setLabel('Orders').setValue('orders'))
    .setAllowOverride(true);
  config.setDateRangeRequired(false);
  return config.build();
}

function getFieldsForResource_(resource) {
  var f = cc.getFields();

  if (resource === 'orders') {
    f.newDimension().setId('id').setName('ID').setType(types.NUMBER);
    f.newDimension().setId('customerId').setName('Customer ID').setType(types.NUMBER);
    // status är en siffra i din JSON (0,1,...) – vi exponerar som TEXT så det går att labela i rapport
    f.newDimension().setId('status').setName('Status').setType(types.TEXT);
    // orderDate -> YEAR_MONTH_DAY
    f.newDimension().setId('dateCreated').setName('Date Created').setType(types.YEAR_MONTH_DAY);
    // items.length som SUM-metrik
    f.newMetric().setId('items').setName('Items Count').setType(types.NUMBER).setAggregation(aggs.SUM);
    // totalAmount som SUM-metrik
    f.newMetric().setId('total').setName('Total Amount').setType(types.NUMBER).setAggregation(aggs.SUM);
    return f;
  }

  // default: customers
  f.newDimension().setId('id').setName('ID').setType(types.NUMBER);
  f.newDimension().setId('name').setName('Name').setType(types.TEXT);
  f.newDimension().setId('email').setName('Email').setType(types.TEXT);
  f.newDimension().setId('city').setName('City').setType(types.TEXT);
  f.newDimension().setId('country').setName('Country').setType(types.TEXT);
  f.newDimension().setId('birthday').setName('Birthday').setType(types.YEAR_MONTH_DAY);
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

  var url = 'https://suvnet.se/api/' + resource;
  var resp = UrlFetchApp.fetch(url);
  var data = JSON.parse(resp.getContentText()); // välformaterad JSON-array

  var rows = data.map(function(obj){
    var vals = requestedFieldIds.map(function(fid){
      return (resource === 'orders') ? mapOrder_(fid, obj) : mapCustomer_(fid, obj);
    });
    return { values: vals };
  });

  return { schema: requestedFields.build(), rows: rows };
}

function mapCustomer_(fid, c) {
  switch(fid) {
    case 'id':          return Number(c.id);
    case 'name':        return c.name;
    case 'email':       return c.email;
    case 'birthday':    return toYMD_(c.birthday);
    case 'city':        return c.city || (c.address && c.address.city);
    case 'country':     return c.country || (c.address && c.address.country);
    case 'dateCreated': return toYMD_(c.dateCreated);
  }
  return null;
}

function mapOrder_(fid, o) {
  switch(fid) {
    case 'id':          return Number(o.id);
    case 'customerId':  return Number(o.customerId);
    case 'status':      return String(o.status); // 0/1/... -> "0"/"1"/...
    case 'items':       return Array.isArray(o.items) ? o.items.length : Number(o.items);
    case 'total':       return Number(o.totalAmount); // fältet heter totalAmount hos dig
    case 'dateCreated': return toYMD_(o.orderDate);   // datumet heter orderDate hos dig
  }
  return null;
}

function toYMD_(iso) {
  if (!iso) return null;
  var d = new Date(iso);
  return Utilities.formatDate(d, 'UTC', 'yyyyMMdd');
}
