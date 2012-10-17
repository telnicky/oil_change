define(['models/Appointment'], function(Appointment) {
  var Appointments = Backbone.Collection.extend({
    model: Appointment,
    url: '/appointments',

    initialize: function () {
      this.on('change:status', this.onChangeStatus, this);
    },

    onChangeStatus: function (model, options) {
      if(model.get('status') == 2) { // 2 is the reserved status
        this.remove(model);
      } 
    }

  });

  return Appointments;
});