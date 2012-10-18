define(['models/Mechanic','views/AppointmentItemView'], 
  function ( Mechanic, AppointmentItemView ) {
    var CurrentAppointmentItemView = AppointmentItemView.extend({

      events: {
        'click .remove-appointment': 'onRemoveAppointment',
        'click .complete-appointment': 'onCompleteAppointment'
      },

      template: _.template(
        '<td><%= ownerStart %></td>' +
        '<td><%= ownerEnd %></td>' +
        '<td><%= location %></td>' +
        '<td><%= vehicle %></td>' +
        '<td>' +
          '<i class="complete-appointment icon-ok"></i>'+
          '<i class="remove-appointment icon-remove"></i>'+
        '</td>' 

      ),

      initialize: function () {
        AppointmentItemView.prototype.initialize.apply(this, arguments);
        if(this.options.mechanic) {
          this.mechanic = new Mechanic(this.options.mechanic);
        }
      },


      onRemoveAppointment: function (event) {
  console.log('CLICK REMOVE EVENT');
        if(this.mechanic.id == this.model.get('mechanic_id')) {
          this.model.save({
           mechanic_id: null,
           status: 1,
          }, {
           success: function () {
            console.log('successful save');
           },
           error: function () {
            console.log('failed save');
           }
          });
        }
      },
      
      onCompleteAppointment: function (event) {
  console.log('CLICK COMPLETE EVENT');
        if(this.mechanic) {
          this.model.save({
           status: 3,
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

  return CurrentAppointmentItemView;

});