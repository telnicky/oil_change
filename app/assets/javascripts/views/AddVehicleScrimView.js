define(['views/iframe'], function(iframe) {
  var AddVehicleScrimView = Backbone.View.extend({
    className: 'add-vehicle-view',
    
    defaults: {

    },

    template: _.template(
      '<%= form %>' +
      '<div class="vehicle-form">' +
        '<div id=""><h4>Add New Vehicle</h4></div>' +
        '<div class="form-field"><input placeholder="' + '<%= make %>' + '" id="vehicle-make" ></input></div>' +
        '<div class="form-field"><input placeholder="Model" id="vehicle-model" ></input></div>' +
        '<div class="form-field"><input placeholder="Year" id="vehicle-year" ></input></div>' +
        '<div class="form-field"><input placeholder="Color" id="vehicle-color" ></input></div>' +
        '<div class="form-field"><input placeholder="License Plate" id="vehicle-license-plate" ></input></div>' +
        '<div class="form-field"><input placeholder="Vin Number" id="vehicle-vin-number" ></input></div>' +
        '<div class="form-field"><label>Vehicle Oil Type</label><select placeholder="Oil Type" id="vehicle-oil-type" >' +
            '<option value="1" selected="selected">Regular</option>' +
            '<option value="2">Sythetic</option>' +
            '<option value="3">Other(See Note)</option></select></div>' +
        '<div class="form-field"><input placeholder="Vehicle Note" id="vehicle-note" ></input></div>' +
        '<div class="form-field"><input type="submit" class="submit-form"></input></div>' +
        '<div class="form-field"><input type="submit" value="Cancel" class="cancel-form"></input></div>' +
      '</div>'
    ),

    events: {
      
    },

    initialize: function() {
      this.build();
    },
    
    build: function() {
      this.$el.html(
        this.template({
          form: '',
          make: 'Make',
          model: 'mode',
          year: 'year',
          color: 'color',
          license_plate: 'licensePlate',
          vin_number: 'vinNumber',
          oil_type: 'oilType',
          notes: 'notes'
       })
      );
    }

    

  });
  return AddVehicleScrimView;
});


