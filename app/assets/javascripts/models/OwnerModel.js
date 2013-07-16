define([], function() {

  var OwnerModel = Backbone.Model.extend({
    urlRoot: '/owners',

    defaults: {
      'first_name': '',
      'last_name': '',
      'phone_number': '',
      'email': ''
    },

    constructor: function OwnerModel () {
      Backbone.Model.apply(this, arguments);
    }


  });

return OwnerModel;
});