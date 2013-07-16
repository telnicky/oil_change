define(['models/OwnerModel', 'models/Vehicle' ,'models/Appointment', 'helpers/dateChanger'],
  function(OwnerModel, Vehicle, Appointment, DateChanger) {
    var OwnerAppointmentItemView = Backbone.View.extend({
      tagName: 'tr',
      className: 'appointment-item-view',

      events: {
        'click': 'onItemClick'
      },

      template: _.template(
          '<td class="app-status"><%=   status   %></td>' +
          '<td class="app-date"><%=     date     %></td>' +
          '<td class="app-time"><%=     time     %></td>' +
          '<td class="app-vehicle"><%=  vehicle  %></td>' +
          '<td class="app-mechanic"><%= mechanic %></td>' +
          '<td class="app-options"><%=  edit     %></td>'
      ),

      constructor: function OwnerAppItemView () {
        Backbone.View.apply(this , arguments);
      },

      initialize: function() {
       this.render();
      },

      buildAppointmentItems: function() {
        var that = this;

        this.appointment = this.collection.get('id');

        this.appointment.fetch({
          success: function(model, response) {
            that.render();
          },
          failure: function(model, response) {
            console.log('Failed to Fetch');
          }
        });
      },

                buildVehicleItems: function() {
                  var that = this;

                  this.vehicle = new Vehicle( {id: this.model.get('vehicle_id')} );

                  this.vehicle.fetch({
                    success: function(model, response) {
                      that.render();
                    },
                    failure: function(model, response) {
                      console.log('Failed to Fetch');
                    }
                  });
                },

      render: function() {
        this.$el.html(
          this.template ({
            status:    this.getAppointmentStatus(),
            date:      this.getAppointmentDate(),
            time:      this.getAppointmentTime(),
            vehicle:   this.getVehicleDetails(),
            mechanic:  ' mechanic ',
            edit:      'edit'
          })
        );
      },

      getAppointmentStatus: function() {
        var status = this.options.get('status');
          if (status == 1) {
            return 'Open';
          } else if (status == 2) {
            return 'Reserved';
          } else if (status == 3) {
            return 'Job Complete';
          }
      },

      getAppointmentDate: function () {
        var start = this.options.get('owner_start'),
            end   = this.options.get('owner_end');
        
        var newDate = new DateChanger(),
            formatted = newDate.getDate(start);
        return formatted;
      },

      getAppointmentTime: function () {
        var s = this.options.get('owner_start'),
            e   = this.options.get('owner_end');
        
        var newDate = new DateChanger(),
            start = newDate.getTime(s),
            end = newDate.getTime(e);

        return ('From: ' + start + ' to ' + end );
      },

      getOwnerDetails: function () {
        var owner = this.options.get('id');
      },

      getVehicleDetails: function() {
//        var make = this.options.get('make'),
  //          model = this.options.get('model'),
    //        plate = this.options.get('license_plate');

        return 'make' + ' ' + 'model' + ' ' + 'plate';
      },

      onItemClick: function(event){
        console.log('Item CLIIIIICKED Render details here');
        console.log(event);
      }
  });
  return OwnerAppointmentItemView;
});