
var AppointmentsView = ListView.extend({

  className: 'mechanic-appointments',

  constructor: function AppointmentsView () {
    ListView.apply(this , arguments);
  },

  initialize: function() {
    this.build();
    this.render();
  },

  build: function() {

  },

  render: function() {
    console.log(this.collection);
    this.$el.append('View!!!!!!!!');
    return this;
  }

});