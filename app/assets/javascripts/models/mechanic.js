define([], function() {

  var Mechanic = Backbone.Model.extend({
    urlRoot: '/mechanics'
  });

  return Mechanic;
});