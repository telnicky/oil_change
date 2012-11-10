define([], function() {
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
      else {
        console.log('itemView failed');
      }
      return items;
    },

    initialize: function() {
      
    }

  });

  return ListView;
});
