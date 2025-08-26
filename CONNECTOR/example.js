var cc = DataStudioApp.createCommunityConnector();
var types = cc.FieldType;

function getAuthType() {
  return { type: "NONE" };
}

function getConfig() {
  var config = cc.getConfig();
  return config.build();
}

function getSchema(request) {
  var fields = cc.getFields();

  fields.newDimension()
    .setId("name")
    .setName("Name")
    .setType(types.TEXT);
    
  return { schema: fields.build() };
}

function getData(request) {
  var fields = cc.getFields();
  fields.newDimension().setId("name").setName("Name").setType(types.TEXT);

  var requestedFieldIds = request.fields.map(function(f){ return f.name; });
  var requestedFields = fields.forIds(requestedFieldIds);

  // Returnera tre rader med "bob"
  var rows = [
    { values: ["bob 1"] },
    { values: ["bob 2"] },
    { values: ["bob 3"] }
  ];

  return {
    schema: requestedFields.build(),
    rows: rows
  };
}