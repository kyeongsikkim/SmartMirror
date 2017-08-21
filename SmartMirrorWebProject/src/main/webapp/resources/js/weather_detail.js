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
			
			latitude = data.latitude;
			longitude = data.longitude;
			
			$('#city').html(weatherInfo);
			$('#weatherStatus').html(data.summary);
			$('#tempMax').html(data.tempMax);
			$('#tempMin').html(data.tempMin);
			$('#weatherTemperature').html(data.temp);
			$('#weatherWind').html(data.wind);
			$('#weatherPrecip').html(data.precip);
		
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
			
			$('#day1').html(data.week1);
			$('#day2').html(data.week2);
			$('#day3').html(data.week3);
			$('#day4').html(data.week4);
			$('#day5').html(data.week5);
			$('#day6').html(data.week6);
			
			switch(data.iconW1) {
			case "rain":
				icons.add(document.getElementById("iconD1"), Skycons.RAIN);
				weatherTag = "rain";
				break;
			case "snow":
				icons.add(document.getElementById("iconD1"), Skycons.SNOW);
				weatherTag = "snow";
				break;
			case "sleet":
				icons.add(document.getElementById("iconD1"), Skycons.SLEET);
				weatherTag = "sleet";
				break;
			case "wind":
				icons.add(document.getElementById("iconD1"), Skycons.WIND);
				weatherTag = "wind";
				break;
			case "fog":
				icons.add(document.getElementById("iconD1"), Skycons.FOG);
				weatherTag = "fog";
				break;
			case "cloudy":
				icons.add(document.getElementById("iconD1"), Skycons.CLOUDY);
				weatherTag = "clouds";
				break;
			case "clear-day":
				icons.add(document.getElementById("iconD1"), Skycons.CLEAR_DAY);
				weatherTag = "clear";
				break;
			case "clear-night":
				icons.add(document.getElementById("iconD1"), Skycons.CLEAR_NIGHT);
				weatherTag = "night";
				break;
			case "partly-cloudy-day":
				icons.add(document.getElementById("iconD1"), Skycons.PARTLY_CLOUDY_DAY);
				weatherTag = "clouds";
				break;
			case "partly-cloudy-night":
				icons.add(document.getElementById("iconD1"), Skycons.PARTLY_CLOUDY_NIGHT);
				weatherTag = "clouds";
				break;
			}
			
			switch(data.iconW2) {
			case "rain":
				icons.add(document.getElementById("iconD2"), Skycons.RAIN);
				weatherTag = "rain";
				break;
			case "snow":
				icons.add(document.getElementById("iconD2"), Skycons.SNOW);
				weatherTag = "snow";
				break;
			case "sleet":
				icons.add(document.getElementById("iconD2"), Skycons.SLEET);
				weatherTag = "sleet";
				break;
			case "wind":
				icons.add(document.getElementById("iconD2"), Skycons.WIND);
				weatherTag = "wind";
				break;
			case "fog":
				icons.add(document.getElementById("iconD2"), Skycons.FOG);
				weatherTag = "fog";
				break;
			case "cloudy":
				icons.add(document.getElementById("iconD2"), Skycons.CLOUDY);
				weatherTag = "clouds";
				break;
			case "clear-day":
				icons.add(document.getElementById("iconD2"), Skycons.CLEAR_DAY);
				weatherTag = "clear";
				break;
			case "clear-night":
				icons.add(document.getElementById("iconD2"), Skycons.CLEAR_NIGHT);
				weatherTag = "night";
				break;
			case "partly-cloudy-day":
				icons.add(document.getElementById("iconD2"), Skycons.PARTLY_CLOUDY_DAY);
				weatherTag = "clouds";
				break;
			case "partly-cloudy-night":
				icons.add(document.getElementById("iconD2"), Skycons.PARTLY_CLOUDY_NIGHT);
				weatherTag = "clouds";
				break;
			}
			
			switch(data.iconW3) {
			case "rain":
				icons.add(document.getElementById("iconD3"), Skycons.RAIN);
				weatherTag = "rain";
				break;
			case "snow":
				icons.add(document.getElementById("iconD3"), Skycons.SNOW);
				weatherTag = "snow";
				break;
			case "sleet":
				icons.add(document.getElementById("iconD3"), Skycons.SLEET);
				weatherTag = "sleet";
				break;
			case "wind":
				icons.add(document.getElementById("iconD3"), Skycons.WIND);
				weatherTag = "wind";
				break;
			case "fog":
				icons.add(document.getElementById("iconD3"), Skycons.FOG);
				weatherTag = "fog";
				break;
			case "cloudy":
				icons.add(document.getElementById("iconD3"), Skycons.CLOUDY);
				weatherTag = "clouds";
				break;
			case "clear-day":
				icons.add(document.getElementById("iconD3"), Skycons.CLEAR_DAY);
				weatherTag = "clear";
				break;
			case "clear-night":
				icons.add(document.getElementById("iconD3"), Skycons.CLEAR_NIGHT);
				weatherTag = "night";
				break;
			case "partly-cloudy-day":
				icons.add(document.getElementById("iconD3"), Skycons.PARTLY_CLOUDY_DAY);
				weatherTag = "clouds";
				break;
			case "partly-cloudy-night":
				icons.add(document.getElementById("iconD3"), Skycons.PARTLY_CLOUDY_NIGHT);
				weatherTag = "clouds";
				break;
			}
			
			switch(data.iconW4) {
			case "rain":
				icons.add(document.getElementById("iconD4"), Skycons.RAIN);
				weatherTag = "rain";
				break;
			case "snow":
				icons.add(document.getElementById("iconD4"), Skycons.SNOW);
				weatherTag = "snow";
				break;
			case "sleet":
				icons.add(document.getElementById("iconD4"), Skycons.SLEET);
				weatherTag = "sleet";
				break;
			case "wind":
				icons.add(document.getElementById("iconD4"), Skycons.WIND);
				weatherTag = "wind";
				break;
			case "fog":
				icons.add(document.getElementById("iconD4"), Skycons.FOG);
				weatherTag = "fog";
				break;
			case "cloudy":
				icons.add(document.getElementById("iconD4"), Skycons.CLOUDY);
				weatherTag = "clouds";
				break;
			case "clear-day":
				icons.add(document.getElementById("iconD4"), Skycons.CLEAR_DAY);
				weatherTag = "clear";
				break;
			case "clear-night":
				icons.add(document.getElementById("iconD4"), Skycons.CLEAR_NIGHT);
				weatherTag = "night";
				break;
			case "partly-cloudy-day":
				icons.add(document.getElementById("iconD4"), Skycons.PARTLY_CLOUDY_DAY);
				weatherTag = "clouds";
				break;
			case "partly-cloudy-night":
				icons.add(document.getElementById("iconD4"), Skycons.PARTLY_CLOUDY_NIGHT);
				weatherTag = "clouds";
				break;
			}
			
			switch(data.iconW5) {
			case "rain":
				icons.add(document.getElementById("iconD5"), Skycons.RAIN);
				weatherTag = "rain";
				break;
			case "snow":
				icons.add(document.getElementById("iconD5"), Skycons.SNOW);
				weatherTag = "snow";
				break;
			case "sleet":
				icons.add(document.getElementById("iconD5"), Skycons.SLEET);
				weatherTag = "sleet";
				break;
			case "wind":
				icons.add(document.getElementById("iconD5"), Skycons.WIND);
				weatherTag = "wind";
				break;
			case "fog":
				icons.add(document.getElementById("iconD5"), Skycons.FOG);
				weatherTag = "fog";
				break;
			case "cloudy":
				icons.add(document.getElementById("iconD5"), Skycons.CLOUDY);
				weatherTag = "clouds";
				break;
			case "clear-day":
				icons.add(document.getElementById("iconD5"), Skycons.CLEAR_DAY);
				weatherTag = "clear";
				break;
			case "clear-night":
				icons.add(document.getElementById("iconD5"), Skycons.CLEAR_NIGHT);
				weatherTag = "night";
				break;
			case "partly-cloudy-day":
				icons.add(document.getElementById("iconD5"), Skycons.PARTLY_CLOUDY_DAY);
				weatherTag = "clouds";
				break;
			case "partly-cloudy-night":
				icons.add(document.getElementById("iconD5"), Skycons.PARTLY_CLOUDY_NIGHT);
				weatherTag = "clouds";
				break;
			}
			
			switch(data.iconW6) {
			case "rain":
				icons.add(document.getElementById("iconD6"), Skycons.RAIN);
				weatherTag = "rain";
				break;
			case "snow":
				icons.add(document.getElementById("iconD6"), Skycons.SNOW);
				weatherTag = "snow";
				break;
			case "sleet":
				icons.add(document.getElementById("iconD6"), Skycons.SLEET);
				weatherTag = "sleet";
				break;
			case "wind":
				icons.add(document.getElementById("iconD6"), Skycons.WIND);
				weatherTag = "wind";
				break;
			case "fog":
				icons.add(document.getElementById("iconD6"), Skycons.FOG);
				weatherTag = "fog";
				break;
			case "cloudy":
				icons.add(document.getElementById("iconD6"), Skycons.CLOUDY);
				weatherTag = "clouds";
				break;
			case "clear-day":
				icons.add(document.getElementById("iconD6"), Skycons.CLEAR_DAY);
				weatherTag = "clear";
				break;
			case "clear-night":
				icons.add(document.getElementById("iconD6"), Skycons.CLEAR_NIGHT);
				weatherTag = "night";
				break;
			case "partly-cloudy-day":
				icons.add(document.getElementById("iconD6"), Skycons.PARTLY_CLOUDY_DAY);
				weatherTag = "clouds";
				break;
			case "partly-cloudy-night":
				icons.add(document.getElementById("iconD6"), Skycons.PARTLY_CLOUDY_NIGHT);
				weatherTag = "clouds";
				break;
			}
			
			icons.play();
			
			loadBackground(data.latitude, data.longitude, weatherTag);

			$('#tempMaxD1').html(data.tempMax1);
			$('#tempMaxD2').html(data.tempMax2);
			$('#tempMaxD3').html(data.tempMax3);
			$('#tempMaxD4').html(data.tempMax4);
			$('#tempMaxD5').html(data.tempMax5);
			$('#tempMaxD6').html(data.tempMax6);
			
			$('#tempMinD1').html(data.tempMin1);
			$('#tempMinD2').html(data.tempMin2);
			$('#tempMinD3').html(data.tempMin3);
			$('#tempMinD4').html(data.tempMin4);
			$('#tempMinD5').html(data.tempMin5);
			$('#tempMinD6').html(data.tempMin6);
			
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
	    var photo = data.photos.photo[Math.floor(Math.random()*parseInt(data.photos.photo.length))];
	    document.querySelector(".weather_detail").style.background = "url('" + photo.url_l + "')";
	  } else {
		  document.querySelector(".weather_detail").style.background = "url('https://fourtonfish.com/tutorials/weather-web-app/images/default.jpg')";
	  }
}