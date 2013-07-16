define(['helpers/scrim', 'models/Vehicle', 'views/scheduleAppointmentView'], function(Scrim, VehicleModel, ScheduleAppointmentView){
    var vehiclesItemView = Backbone.View.extend({

      className: 'vehicle-ticket',

      events: {
        'click .schedule-oil-change': 'onScheduleOilChangeClick',
        'click .edit-vehicle': 'onEditVehicleClick',
        'click .delete-vehicle': 'onDeleteVehicleClick',
        'click .save-vehicle-info': 'onSaveVehicleInfoClick'
      },

      template: _.template(
        '<div class="vehicle-icons"><img src="/assets/oil.png"><img src="/assets/car_display.png"><img src="/assets/appointment.png"></div>' +
        '<div class="vehicle-specifics">' +
          '<div class="make-model-year">' +
            '<div class="vehicle-edit-field">Make: <input  value="<%= make %>" class="make"></input></div>'           +
            '<div class="vehicle-edit-field">Model: <input value="<%= model %>"  class="model"></input></div>'        +
            '<div class="vehicle-edit-field">Year: <input  value="<%= year %>"  class="year"></input></div>'          +
            '<div class="vehicle-edit-field break">Color: <input value="<%= color %>" class="color"></input></div>'   +
            '<div class="vehicle-edit-field">Mileage: <input value="<%= mileage %>"  class="mileage"></input></div>'  +
            '<div class="vehicle-edit-field">Plate #: <input value="<%= plate %>"  class="plate"></input></div>'      +
            '<div class="vehicle-edit-field">VIN #: <input   value="<%= vin %>"  class="vin"></input></div>'          +
            '<div class="vehicle-edit-field break">Oil Type: <input value="<%= oil %>"  class="oil"></input></div>'   +
          '</div>'  +
          '<div class="notes vehicle-display">'   +
            '<div class="vehicle-edit-field">Notes: <input value="<%= notes %>"></input></div>' +
          '</div>'  +
        '</div>'    +
        '<div class="vehicle-admin">'   +
          '<a href="#" class="btn btn-primary btn-small btn-block schedule-oil-change">Schedule Oil Change</a>' +
          '<a href="#" class="btn btn-success btn-small btn-block edit-vehicle">Edit Vehicle Info</a>'          +
          //buttons to display after edit vehicle click
          '<a href="#" class="btn btn-inverse btn-small btn-block hidden delete-vehicle">Delete Vehicle</a>'          +
          '<a href="#" class="btn btn-success btn-small btn-block hidden save-vehicle-info">Save Vehicle Info</a>'    +
        '</div>'
      ),

      constructor: function vehiclesItemView(){
        Backbone.View.apply(this, arguments);
      },

      initialize: function() {
        $('.vehicle-ticket input').attr('disabled', true);
        this.build();
      },

      build: function(){
        var v = this.model;

        this.$el.html(
          this.template({
            make:     v.get('make'),
            model:    v.get('model'),
            year:     v.get('year'),
            color:    v.get('color'),
            mileage:  v.get('mileage'),
            plate:    v.get('plate'),
            vin:      v.get('vin'),
            oil:      v.get('oil'),
            notes:    v.get('notes')
          })
        );
      },

      onScheduleOilChangeClick: function() {
        var s = new Scrim({ view: this }),
            v = new ScheduleAppointmentView({
              model: this.model,
              view: s
            });
        $('body').prepend(s.el);

      },
      
      onEditVehicleClick: function() {
        this.$('.schedule-oil-change, .edit-vehicle').addClass('hidden');
        this.$('.delete-vehicle, .save-vehicle-info').removeClass('hidden');
        this.$('input').removeAttr('disabled');
      },
      
      onDeleteVehicleClick: function() {
        this.model.destroy();
      },
      
      onSaveVehicleInfoClick: function() {
        this.$('.schedule-oil-change, .edit-vehicle').removeClass('hidden');
        this.$('.delete-vehicle, .save-vehicle-info').addClass('hidden');
        this.$('input').attr('disabled', true);

        this.model.set({
            make:     this.$('.make').val(),
            model:    this.$('.model').val(),
            year:     this.$('.year').val(),
            color:    this.$('.color').val(),
            mileage:  this.$('.mileage').val(),
            plate:    this.$('.plate').val(),
            vin:      this.$('.vin').val(),
            oil:      this.$('.oil').val(),
            notes:    this.$('.notes').val()
            });
        
        this.model.save({success: console.log('Successful Save')});
      }

    });
  return vehiclesItemView;
});