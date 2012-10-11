
define(['models/Vehicle'], function(Vehicle) {
  var AppointmentItemView = Backbone.View.extend({
    tagName: 'tr',
    className: 'appointment-item-view',

    template: _.template(
      '<td><%= ownerStart %></td>' +
      '<td><%= ownerEnd %></td>' +
      '<td><%= location %></td>' +
      '<td><%= vehicle %></td>'
    ),

    constructor: function AppointmentItemView () {
      Backbone.View.apply(this , arguments);
    },

    initialize: function() {
      var that = this;
      this.vehicle = new Vehicle({id: this.model.get('vehicle_id')});
      this.vehicle.fetch({
        success: function(model, response) {
          console.log('Fetch Succeeeeeeeeeded');
          that.render();
        },

        error: function(model, response) {
          console.log('Failed to Fetch');
        }
      })
    },

    getLocation: function() {
      var street = this.model.get('street'),
        city  = this.model.get('city'),
        zip   = this.model.get('zip'),
        state = this.model.get('state');

      return street + ' ' + city + ', ' + state + ' ' + zip;
    },

    getVehicle: function() {
      var make = this.vehicle.get('make'),
        model = this.vehicle.get('model')

      return make + ' ' + model;
    },



    render: function() {
      this.$el.html(
        this.template({
          ownerStart: this.model.getDate(this.model.get('owner_start')),
          ownerEnd:   this.model.getDate(this.model.get('owner_end')),
          location:   this.getLocation(),
          vehicle:    this.getVehicle() 
        })
      );
    }

  });
  return AppointmentItemView;
});