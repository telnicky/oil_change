// take collection
// create listItemView for each model
// responsible for headers
var ListView = Backbone.View.extend({
  
  tagName: 'table',

  constructor: function() {
    Backbone.View.apply(this, arguments);
  },

  initialize: function() {
    this.collection.each(function(listItem){
      var item = new ListItemView(model: listItem);
      this.$el.append(item);
    });
  }

});

new ListView({ collection: something, itemView: SomeListItemView})