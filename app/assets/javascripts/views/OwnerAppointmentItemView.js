define(['models/OwnerModel', 'models/Vehicle' ,'models/Appointment'], 
  function(OwnerModel, Vehicle, Appointment) { 
    var OwnerAppointmentItemView = Backbone.View.extend({ 
      tagName: 'tr',
      className: 'appointment-item-view',

      events: {
        'click': 'onItemClick'
      },

      template: _.template(
        '<tr><td><%= status %></td>' +
        '<td><%= date %></td>' +
        '<td><%= time %></td>' +
        '<td><%= vehicle %></td>' +
        '<td><%= mechanic %></td>' +
        '<td><%= edit %></td></tr>'
      ),

      constructor: function OwnerAppItemView () {
        Backbone.View.apply(this , arguments);
      },   

      initialize: function() {
        var that = this;
        this.appointment = new Appointment({id: this.model.get('owner_id')})
        this.appointment.fetch({
          success: function(model, response) {
            that.render();
          },
          failure: function(model, response) {
            console.log('Failed to Fetch')
          }
        })
      },

      render: function() {
        this.$el.html(
          this.template({
            status:    this.model.get('status'),   
            date:      'insert date',
            time:      'insert time',
            vehicle:   this.getVehicleDetails(),
            mechanic:  'insert mechanic details',
            edit:      'insert edit buttons'
          })
        );
      },

      getAppointmentDetails: function () {
        //var appointment = this.model.get('appointment_id');
      },

      getOwnerDetails: function () {
        var owner = this.model.get('id');
      },

      getVehicleDetails: function() {
        var make = this.vehicle.get('make'),
            model = this.vehicle.get('model'),
            plate = this.vehicle.get('license_plate')

        return make + ' ' + model + ' ' + plate;    
      },
  });
  return OwnerAppointmentItemView;
});