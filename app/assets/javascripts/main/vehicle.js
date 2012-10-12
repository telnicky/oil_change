$(function(){
  require(['collections/Vehicles', '', ''],
    function (Vehicles, , ){

      var vehicles = new Vehicles(window.jsonData);

      var vehiclesview = new Vehiclesview({
        collection: vehicles,
        itemView: AppointnmentItemView
      });
      $('.show-owners-vehicles').append(appointmentsView.el);
    })
});