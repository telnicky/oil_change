define([], function() {

  var Appointment = Backbone.Model.extend({
    urlRoot: '/appointments',

    defaults: {
      'street': '',
      'city': '',
      'zip': '',
      'owner_notes': '',
      'owner_start': '',
      'owner_end': '',
      'mechanic_start': undefined,
      'mechanic_end': undefined,
      'mechanic_notes': '',
      'status': undefined,
      'mechanic_id': undefined,
      'owner_id': undefined,
      'vehicle_id': undefined
    },

    initialize: function () {
      this.bind('change', this.onChange);
    },

    getDate: function (date_string) {
      var date  = new Date(date_string),
          month = date.getMonth().toString(),
          day   = date.getDate().toString(),
          hours = date.getHours().toString(),
          minutes = date.getMinutes().toString(),
          formatted = month + '/' + day + ' ' + hours + ':' + minutes;
      return formatted;
    },

    onChange: function (model, options) {
      this.trigger('removeAppointment', model, options);
    }

  });
  
  return Appointment;
});