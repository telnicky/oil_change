// take collection
// create listItemView for each model
// responsible for headers
var ListView = Backbone.View.extend({
  
  constructor: function ListView() {
    Backbone.View.apply(this, arguments);
  },

  getItems: function() {
    var that = this,
      itemView = this.options.itemView,
      items = [];
    
    if(itemView) {
      this.collection.each(function(listItem){
        var item = new itemView({model: listItem});
        items.push(item);
      });
    }

    return items;
  },

  initialize: function() {
    
  }

});

