var latitude;
var longitude;
var weatherTag;

function weatherSearch(weatherInfo) {
	var json = { "address" : weatherInfo };
	console.log(weatherInfo);
	$.ajax({
		type: "POST",
		url: "/SmartMirrorWebProject/weather_detail",
		data: json,
		success: function(data) {
			
			$('#city').html(weatherInfo);
			$('#weatherStatus').html(data.icon);
			$('#weatherTemperature').html(data.temp + "°");
			latitude = data.latitude;
			longitude = data.longitude;
			
			var icons = new Skycons({
				"color" : "white"
			});
			
			switch(data.icon) {
			case "rain":
				icons.add(document.getElementById("weatherIcon"), Skycons.RAIN);
				weatherTag = "rain";
				break;
			case "snow":
				icons.add(document.getElementById("weatherIcon"), Skycons.SNOW);
				weatherTag = "snow";
				break;
			case "sleet":
				icons.add(document.getElementById("weatherIcon"), Skycons.SLEET);
				weatherTag = "sleet";
				break;
			case "wind":
				icons.add(document.getElementById("weatherIcon"), Skycons.WIND);
				weatherTag = "wind";
				break;
			case "fog":
				icons.add(document.getElementById("weatherIcon"), Skycons.FOG);
				weatherTag = "fog";
				break;
			case "cloudy":
				icons.add(document.getElementById("weatherIcon"), Skycons.CLOUDY);
				weatherTag = "clouds";
				break;
			case "clear-day":
				icons.add(document.getElementById("weatherIcon"), Skycons.CLEAR_DAY);
				weatherTag = "clear";
				break;
			case "clear-night":
				icons.add(document.getElementById("weatherIcon"), Skycons.CLEAR_NIGHT);
				weatherTag = "night";
				break;
			case "partly-cloudy-day":
				icons.add(document.getElementById("weatherIcon"), Skycons.PARTLY_CLOUDY_DAY);
				weatherTag = "clouds";
				break;
			case "partly-cloudy-night":
				icons.add(document.getElementById("weatherIcon"), Skycons.PARTLY_CLOUDY_NIGHT);
				weatherTag = "clouds";
				break;
			}
			icons.play();
			loadBackground(data.latitude, data.longitude, weatherTag);
		}
	});
}

function loadBackground(lat, lon, weatherTag) {
	  var script_element = document.createElement('script');

	  script_element.src = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=6be332744386acc586f19874b1e74ccd&lat="+latitude+"&lon="+longitude+"&accuracy=1&tags="+weatherTag+"&sort=relevance&extras=url_l&format=json";
	  
	  document.getElementsByTagName('head')[0].appendChild(script_element);
}

function jsonFlickrApi(data){
	  if (data.photos.pages > 0){
	    //var randomPhotoId = parseInt(data.photos.total);
		  console.log(data);
	    var photo = data.photos.photo[Math.floor(Math.random()*parseInt(data.photos.photo.length))];
	    document.querySelector(".weatherdetail").style.background = "url('" + photo.url_l + "')";
	    document.querySelector(".weatherdetail").style.backgroundSize = "cover";
	  } else {
		  document.querySelector(".weatherdetail").style.background = "url('https://fourtonfish.com/tutorials/weather-web-app/images/default.jpg')";
		  document.querySelector(".weatherdetail").style.backgroundSize = "cover";
	  }
}