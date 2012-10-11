define([], function() {

  var Owner = Backbone.Model.extend({
    urlRoot: '/owners'
  });

  return Owner;
});