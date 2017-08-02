var map;
var geocoder;
var address;
var currzoom;

function initMap() {
    var uluru = {lat: 37.4950883, lng: 127.1223549};
    currzoom = 14;
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: currzoom,
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

function zoomIn() {
	if(currzoom < 20) {
		currzoom++;
		currzoom++;
		setZoom(currzoom, map);
	}
}

function zoomOut() {
	if(currzoom > 2) {
		currzoom--;
		currzoom--;
		setZoom(currzoom, map);
	}
}

function zoomReset() {
	currzoom = 14;
	setZoom(currzoom, map);
}


function setZoom(zoom, resultsMap) {
	resultsMap.setZoom(zoom);
}

