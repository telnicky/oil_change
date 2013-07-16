define([], function() {
    var dateChanger = Backbone.View.extend({

      options: {
        months : ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
        weekdays : ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
      },
    //returns MM:DD
    getDate: function(date_string) {
      var date  = new Date(date_string),
          weekday = this.options.weekdays[date.getDay()],
          month = this.options.months[date.getMonth()],
          day   = date.getDate().toString(),
          dateFormat = weekday + ', ' + month + ' ' + day;
      return dateFormat;
    },

    //returns HH:MM
    getTime: function(date_string) {
      var date  = new Date(date_string),
          hours = date.getHours().toString(),
          minutes = date.getMinutes().toString(),
          timeFormat = hours + ':' + minutes;
      return timeFormat;
    }

    });
  
  return dateChanger;
});