
    var latlng = new google.maps.LatLng(40.303467, -111.66164);
    var map;

    function initialize() {
        var mapOptions = {
          zoom: 12,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById('map_canvas'),
            mapOptions);

        // Try HTML5 geolocation
        if(navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = new google.maps.LatLng(position.coords.latitude,
                                             position.coords.longitude);

            /*var infowindow = new google.maps.InfoWindow({
              map: map,
              position: pos,
              content: "We found your approximate location. \n Use the fields above to schedule the exact location of your oil change."
            }); */

            map.setCenter(pos);
          }, function() {
            handleNoGeolocation(true);
          });
        } else {
          // Browser doesn't support Geolocation
          handleNoGeolocation(false);
        }
      }

      function handleNoGeolocation(errorFlag) {
        if (errorFlag) {
          var content = 'Error: The Geolocation service was not properly initialized.';
        } else {
          var content = 'Error: Your browser doesn\'t support geolocation.';
        }

        var options = {
          map: map,
          position: new google.maps.LatLng(60, 105),
          content: content
        };

        var infowindow = new google.maps.InfoWindow(options);
        map.setCenter(options.position);
      }

      google.maps.event.addDomListener(window, 'load', initialize);
//
//code to change map to input location
//
    $(function(){ 
      function getNewLatLng() {
        var address = ($('#street').val() || "") + " " + ($('#city').val() || "") + " " +  ($('#zip').val() || "");
        var geocoder = new google.maps.Geocoder();
       
        var geo = geocoder.geocode({'address' : address}, function(results, status){
            if (status == google.maps.GeocoderStatus.OK) {
              //collect lat and lng set to x and y, respectively
              var newX = results[0].geometry.location.Xa;
              var newY = results[0].geometry.location.Ya;
                
              //render the map.
              map.setCenter(new google.maps.LatLng(newX, newY));
              //add new point & popup-window to map or update existing point         
              if ( appMaker == false) {
                //add point to map
                var appMarker = new google.maps.Marker({
                  position: results[0].geometry.location,
                  map: map,
                  zoom: 4,
                  title: 'Your appointment location!',
                });
                //update window
                var windowBox = new google.maps.InfoWindow({
                      map: map,
                      position: results[0].geometry.location,
                      content: 'Your vehicle\'s location'
                    });
              } else { 
                //Just Update the Marker position
                appMarker.setPosition( results[0].geometry.location );
                 //update window
                windowBox.setPosition( results[0].geometry.location ); 
              } //if ( marker ) END
                                        
            } else {
              alert("Geocode was not successful for the following reason: " + status);
            }
          }); //var geo = geocoder.... END
        }; //getNewLatLng END
       
      $('#zip').change(getNewLatLng);
      $('#city').change(getNewLatLng);
      $('#street').change(getNewLatLng);
    
    });  //$(function(){ END

  <!-- END GOOGLE MAPS API -->