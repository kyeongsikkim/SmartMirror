var map;
var geocoder;
var address;

function initMap() {
    var uluru = {lat: 37.4950883, lng: 127.1223549};
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: uluru
    });
    geocoder = new google.maps.Geocoder();
    /*var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });*/
  }

function setMap(data) {
	address = data;
	geocodeAddress(geocoder, map);
}

function geocodeAddress(geocoder, resultsMap) {
    geocoder.geocode({'address': address}, function(results, status) {
      if (status === 'OK') {
        resultsMap.setCenter(results[0].geometry.location);
        /*var marker = new google.maps.Marker({
          map: resultsMap,
          position: results[0].geometry.location
        });*/
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

