define(['models/Owner'], function(Appointment) {
    
    var Owners = Backbone.Collection.extend({
      model: Owners,
      url: '/appointments'
    });

    return Owners;
});