
var AppointmentsView = Backbone.View.extend({

  className: 'mechanic-appointments',

  initialize: function() {
    // this.build();
    this.render();
  },

  render: function() {
    console.log(this.$el);
    this.$el.append('View!!!!!!!!');
    return this;
  }

});