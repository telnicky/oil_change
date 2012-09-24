

$(function() {
  $( ".timepicker" ).timepicker({
    showPeriod: true,
    showLeadingZero: false
  });
});

$(function() {
  $( "#datepicker" ).datepicker({ minDate: 0, maxDate: "+1M" });
});

$(function() {
  function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng(-34.397, 150.644),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"),
        mapOptions);
  }
});