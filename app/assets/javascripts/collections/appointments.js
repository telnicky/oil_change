define(['models/Appointment'], function(Appointment) {

  var Appointments = Backbone.Collection.extend({
    model: Appointment,
    url: '/appointments'

  });

  return Appointments;
});