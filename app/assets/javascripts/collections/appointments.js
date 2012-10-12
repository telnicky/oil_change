define(['models/Appointment'], function(Appointment) {
  var Appointments = Backbone.Collection.extend({
    model: Appointment,
    url: '/appointments',

    initialize: function () {
      this.bind('removeAppointment', this.onRemoveAppointment);
    },

    onRemoveAppointment: function (model, options) {
console.log('remove appointment');
      this.remove(model);
    }

  });

  return Appointments;
});