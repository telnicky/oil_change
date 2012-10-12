define(['models/Vehicles'], function() {
  
  var Vehicles = Backbone.Collection.extend({
    model: Vehicles,
    url: '/owners'
  });
  
  return Vehicles;
});