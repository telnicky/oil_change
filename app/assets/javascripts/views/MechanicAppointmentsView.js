define(['views/AppointmentsView'], 
  function ( AppointmentsView ) {
    var MechanicAppointmentsView = AppointmentsView.extend({ 
      className: 'mechanic-appointments table table-striped table-hover table-condensed',

      getItems: function() {
        var that = this,
          itemView = this.options.itemView,
          items = [];
        
        if(itemView) {
          var that = this;
          this.collection.each(function(listItem){
            var item = new itemView({model: listItem, mechanic: that.options.mechanic});
            items.push(item);
          });
        }

        return items;
      }

    });

    return MechanicAppointmentsView;
});