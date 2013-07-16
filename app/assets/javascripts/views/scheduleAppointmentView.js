define(['models/Appointment'], function(Appointment) {
  var scheduleAppointmentView = Backbone.View.extend({

    className: 'schedule-appointment-view',

    events: {
      'click .cancel-appointment': 'onCancelAppointmentClick',
      'click .save-appointment': 'onSaveAppointmentClick',
      'click .scrim-cover': 'onCancelAppointmentClick'
    },

    constructor: function scheduleAppointmentView() {
      Backbone.View.apply(this, arguments);
    },

    template: _.template(
      '<div class="display-vehicle">Appointment for <%= make %> <%= model %> <%= year %></div>' +
      '<div class="date-time"><span>Choose the date & time</span>'              +
          '<div><label>Month</label>  <input attribute="month" ></input></div>' +
          '<div><label>Day</label>    <input attribute="day"></input></div>'    +
          '<div class="left-half"><div>From: </div>'+
            '<div><label>Hour</label>   <input attribute="start-hour"></input></div>'   +
            '<div><label>Minute</label> <input attribute="start-minute"></input></div></div>' +
          '<div class="right-half"><div>To: </div>'+
          '<div><label>Hour</label>   <input attribute="end-hour"></input></div>'   +
          '<div><label>Minute</label> <input attribute="end-minute"></input></div></div>' +
      '</div>'  +
      '<div class="location"><span>Choose the location</span>'                  +
          '<div><label>Street</label>  <input attribute="street"></input></div>'+
          '<div><label>City</label>    <input attribute="city"></input></div>'  +
          //'<div><label>State</label>   <input attribute="state"></input></div>' +
          '<div><label>Zip</label>     <input attribute="zip"></input></div>'   +
      '<div>'   +
      '<div class="notes-for-mechanic"><span>Leave a Note for the Mechanic</span>' +
          '<div><label>Notes</label>  <input attribute="notes"></input></div>'  +
      '</div>'  +
      '<div class="submit-appointment">' +
          '<a href="#" class="btn btn-primary btn-small save-appointment">Save Appointment</a>'    +
          '<a href="#" class="btn btn-action btn-small cancel-appointment">Cancel Appointment</a>' +
      '</div>'
    ),

    initialize: function () {
      this.removeExistingScrims();
      this.build();
      this.delegateEvents();
    },

    build: function() {
      var v = this.$el.html(
        this.template({
          make: this.model.make,
          model: this.model.model,
          year: this.model.year
          })
      );

      return v;
    },

    removeExistingScrims: function() {
      if ($('.scrim-cover')) {
        $('.scrim-cover').remove();
      }
    },

    onSaveAppointmentClick: function () {
      this.model.set({
      });
    },

    onCancelAppointmentClick: function () {
      console.log('scheduleAppointmentView click');
      this.$('.scrim-cover').remove();
    }


  });
  return scheduleAppointmentView;
});