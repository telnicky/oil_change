define([], function() {
  var vehicleForm = Backbone.Form.setTemplates ({
    template: 
      '<div class="container">'+
       
          '<fieldset>' +
           '<input id="vehicle_owner_id" name="vehicle[owner_id]" type="hidden" />' +

            '<div class="control-group">' +
              '<label class="control-label" for="vehicle_make">Make</label>' +
              '<div class="controls">' +
                '<input id="vehicle_make" name="vehicle[make]" size="30" type="text" />' +
              '</div>' +
            '</div>' +

            '<div class="form-actions">' +
              '<input class="btn btn-primary" name="commit" type="submit" value="Create Vehicle" />' +
            '</div>' +
          
          '</fieldset>' +

        '</form>' +
      '</div>'
  });
  return vehicleForm
});