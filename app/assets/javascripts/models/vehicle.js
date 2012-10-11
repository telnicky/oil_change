define([], function() {

  var Vehicle = Backbone.Model.extend({
    urlRoot: '/vehicles'
  });
  
  return Vehicle;
});