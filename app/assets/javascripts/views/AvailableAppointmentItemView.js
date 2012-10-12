define(['models/Mechanic','views/AppointmentItemView'], 
  function ( Mechanic, AppointmentItemView ) {
    var AvailableAppointmentItemView = AppointmentItemView.extend({

      events: {
        'click .add-appointmnet': 'onAddAppointment'
      },

      template: _.template(
        '<td><%= ownerStart %></td>' +
        '<td><%= ownerEnd %></td>' +
        '<td><%= location %></td>' +
        '<td><%= vehicle %></td>' +
        '<td><i class="add-appointmnet icon-plus"></i></td>' 

      ),

      initialize: function () {
        AppointmentItemView.prototype.initialize.apply(this, arguments);
        if(this.options.mechanic) {
          this.mechanic = new Mechanic(this.options.mechanic);
        }
      },


      onAddAppointment: function (event) { 
        if(this.mechanic) {
          mechanic_id = this.mechanic.id;
          this.model.save({
           mechanic_id: mechanic_id,
           status: 2,
          }, {
           success: function () {
            console.log('successful save');
           },
           error: function () {
            console.log('failed save');
           }
          });
        }
      }

  });

  return AvailableAppointmentItemView;

});