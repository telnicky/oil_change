define([], function() {

  var Vehicle = Backbone.Model.extend({
    urlRoot: '/vehicles',

    defaults: {
      'make': '',
      'model': '',
      'year': '',
      'color': '',
      'license_plate': '',
      'vin_number': '',
      'oil_type': '',
      'notes': '',
      'owner_id': undefined
    }
    
  });
  return Vehicle;
});