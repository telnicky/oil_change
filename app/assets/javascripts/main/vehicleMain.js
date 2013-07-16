define(['collections/Vehicles', 'views/VehiclesItemsView'],
  function(VehiclesCollection, VehiclesItemsView ){
    var vehicleMain = Backbone.View.extend({
      className: 'vehicles-main-view',

      constructor: function vehicleMain(){
        Backbone.View.apply(this, arguments);
      },

      events: {
        'destroy': 'getVehicles',
        'change': 'getVehicles'
      },

      initialize: function() {
        this.build();
        this.getVehicles();
      },

      build: function() {
       this.collection = new VehiclesCollection( window.jsonDataOwnersVehicles );
        $('.show-owners-vehicles').prepend( '<h1>' + 'Your Vehicles' + '</h1>');
      },

      getVehicles: function() {
        var vehicles = this.collection.models;

        _.each(vehicles, function(vehicle){
          var vehiclesview = new VehiclesItemsView({
            model: vehicle
          });
          $('.show-owners-vehicles').append(vehiclesview.el);
        });
      }

  });
  return vehicleMain;
});