define([], function() { 

  var Owner = Backbone.Model.extend({
    urlRoot: '/owners',

    defaults: {
      'first_name': '',
      'last_name': '',
      'phone_number': '',
      'email': ''
    },
  });

return Owner
});