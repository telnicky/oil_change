define(['models/Vehicle'], function(Vehicle) {
  
  var Vehicles = Backbone.Collection.extend({
    model: Vehicle,
    url: '/vehicles',
    
    constructor: function Vehicles () {
      Backbone.Collection.apply(this, arguments);
    }



  });
  return Vehicles;
});