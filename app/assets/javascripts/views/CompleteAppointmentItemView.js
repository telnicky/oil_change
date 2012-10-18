define(['models/Mechanic','views/AppointmentItemView'], 
  function ( Mechanic, AppointmentItemView ) {
    var AvailableAppointmentItemView = AppointmentItemView.extend({

      template: _.template(
        '<td><%= ownerStart %></td>' +
        '<td><%= ownerEnd %></td>' +
        '<td><%= location %></td>' +
        '<td><%= vehicle %></td>'

      ),

      initialize: function () {
        AppointmentItemView.prototype.initialize.apply(this, arguments);
        if(this.options.mechanic) {
          this.mechanic = new Mechanic(this.options.mechanic);
        }
      }

  });

  return AvailableAppointmentItemView;

});