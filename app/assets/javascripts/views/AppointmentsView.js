define(['views/ListView','views/AppointmentItemView'], function(ListView, AppointmentItemView) {
  var AppointmentsView = ListView.extend({

    className: 'appointments table table-striped table-hover',
    tagName: 'table',

    constructor: function AppointmentsView () {
      ListView.apply(this , arguments);
    },

    build: function () {
      var that = this;
      this.items = this.getItems();

      this.thead = this.make('thead', {}, 
        '<tr>' +
          '<th>Begin</th>' +
          '<th>End</th>' +
          '<th>Location</th>' +
          '<th>Vehicle</th>' +
        '</tr>'
      );
      
      this.tbody = $(this.make('tbody'));
      if(this.items.length == 0) {
        var item = '<td>There are currently no appointments.</td>';
        this.tbody.append(item);
      } else {
        _.each(this.items, function(item) {
          that.tbody.append(item.el);
        });
      }
    },

    initialize: function () {
      this.build();
      this.render();
    },

    onRemove: function (model, options) {
      $('#' + model.get('id')).remove();
      this.render();
    },

    render: function () {
      // set html
      this.$el.html(this.tbody);
      this.el.insertBefore(this.thead, this.tbody);
      
      // bind events
      this.collection.on('remove', this.onRemove, this);
      _.each(this.items, function(item){
        item.delegateEvents();
      });
    }

  });
  return AppointmentsView;
});
