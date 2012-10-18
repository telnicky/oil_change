define(['models/Appointment'], function(Appointment) {
  var Appointments = Backbone.Collection.extend({
    model: Appointment,
    url: '/appointments',

    initialize: function () {
      this.on('change:status', this.onChangeStatus, this);
    },

    onChangeStatus: function (model, options) {
      // appointments are in collections of same status
      this.remove(model); 
    }

  });

  return Appointments;
});