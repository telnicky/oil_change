
var AppointmentsView = ListView.extend({

  className: 'mechanic-appointments',

  tagName: 'table',

  constructor: function AppointmentsView () {
    ListView.apply(this , arguments);
  },

  build: function () {
    this.thead = this.make('thead', {}, 
      '<tr>' +
        '<th>Begin</th>' +
        '<th>End</th>' +
        '<th>Location</th>' +
        '<th>Vehicle</th>' +
      '</tr>'
    );

    this.tbody = this.make('tbody');

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