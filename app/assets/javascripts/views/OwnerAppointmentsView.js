define(['views/ListView', 'views/OwnerAppItemView'], 
  function(ListView, OwnerAppItemView) {
    var OwnersAppointmentView = ListView.extend({
      tagName: 'table',
      className: 'owner-appointment-table',

   
      
    build: function() {
      this.thead = this.make('thead', {},
        '<tr>' +
          '<th>Status</th>' +
          '<th>Date</th>' +
          '<th>Time</th>' +
          '<th>Vehicle</th>' +
          '<th>Mechanic</th>' +
          '<th>Edit</th>' +
        '</tr>'
        );
      this.tbody = this.make('tbody');
    },   

    constructor: function OwnerAppointmentsView () {
      ListView.apply(this , arguments);
    },

    initialize: function () {
      var that = this;
        items = this.getItems();
      this.build();

      _.each(items, function(item) {
        that.tbody.appendChild(item.el);
      });

      this.$el.html(this.tbody);
      this.el.insertBefore(this.thead, this.tbody);
    }

    });
    return OwnersAppointmentView;
});