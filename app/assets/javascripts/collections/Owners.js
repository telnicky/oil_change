define(['models/OwnerModel'], function(Owner) {
    
    var Owners = Backbone.Collection.extend({
      model: Owners,
      url: '/owners'
    });

    return Owners;
});