define(['views/ListView', 'views/OwnerAppointmentItemView'],
  function(ListView, OwnerAppointmentItemView) {
    var OwnersAppointmentView = ListView.extend({
    

      tagName: 'table',
      className: 'owner-appointment-table',
      
      constructor: function OwnersAppointmentView () {
        ListView.apply(this , arguments);
      },
      
      initialize: function () {
        this.build();
        this.getAppointments();
      },
      
      build: function() {
        this.thead = this.make('thead', {},
          '<tr>' +
          '<td class="app-status">Status</td>' +
          '<td class="app-date">Date</td>' +
          '<td class="app-time">Time</td>' +
          '<td class="app-vehicle">Vehicle</td>' +
          '<td class="app-mechanic">Mechanic</td>' +
          '<td class="app-options">Edit</td>'+
          '</tr>'
          );
        this.tbody = this.make('tbody');
      },

      getAppointments: function() {
        var items = this.collection.models,
            that = this;

        _.each(items, function(item) {
          var appointment = new OwnerAppointmentItemView(item);
          that.tbody.appendChild(appointment.el);
        });

        this.$el.html(this.tbody);
        this.el.insertBefore(this.thead, this.tbody);
      }
    
    
    });
  return OwnersAppointmentView;
});