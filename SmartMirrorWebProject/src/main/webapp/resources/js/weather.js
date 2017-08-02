function weatherDefault() {

	$.ajax({
		type : "GET",
		url : "/SmartMirrorWebProject/weather",
		error : function() {
			alert('error');
		},
		success : function(data) {
			$('#temperature').html(data.temp + "°");
			$('#summary').html(data.summary);
			$('#tempMax1').html(data.tempMax1);
			$('#tempMax2').html(data.tempMax2);
			$('#tempMax3').html(data.tempMax3);
			$('#tempMax4').html(data.tempMax4);
			$('#tempMax5').html(data.tempMax5);
			$('#tempMax6').html(data.tempMax6);
			$('#tempMin1').html(data.tempMin1);
			$('#tempMin2').html(data.tempMin2);
			$('#tempMin3').html(data.tempMin3);
			$('#tempMin4').html(data.tempMin4);
			$('#tempMin5').html(data.tempMin5);
			$('#tempMin6').html(data.tempMin6);
			$('#weekday1').html(data.week1);
			$('#weekday2').html(data.week2);
			$('#weekday3').html(data.week3);
			$('#weekday4').html(data.week4);
			$('#weekday5').html(data.week5);
			$('#weekday6').html(data.week6);

			var icons = new Skycons({
				"color" : "white"
			});
			switch(data.icon) {
			case "rain":
				icons.add(document.getElementById("icon"), Skycons.RAIN);
				break;
			case "snow":
				icons.add(document.getElementById("icon"), Skycons.SNOW);
				break;
			case "sleet":
				icons.add(document.getElementById("icon"), Skycons.SLEET);
				break;
			case "wind":
				icons.add(document.getElementById("icon"), Skycons.WIND);
				break;
			case "fog":
				icons.add(document.getElementById("icon"), Skycons.FOG);
				break;
			case "cloudy":
				icons.add(document.getElementById("icon"), Skycons.CLOUDY);
				break;
			case "clear-day":
				icons.add(document.getElementById("icon"), Skycons.CLEAR_DAY);
				break;
			case "clear-night":
				icons.add(document.getElementById("icon"), Skycons.CLEAR_NIGHT);
				break;
			case "partly-cloudy-day":
				icons.add(document.getElementById("icon"), Skycons.PARTLY_CLOUDY_DAY);
				break;
			case "partly-cloudy-night":
				icons.add(document.getElementById("icon"), Skycons.PARTLY_CLOUDY_NIGHT);
				break;
			}

			// ------------------------------------------------------------------------------

			switch(data.iconW1) {
			case "rain":
				icons.add(document.getElementById("iconW1"), Skycons.RAIN);
				break;
			case "snow":
				icons.add(document.getElementById("iconW1"), Skycons.SNOW);
				break;
			case "sleet":
				icons.add(document.getElementById("iconW1"), Skycons.SLEET);
				break;
			case "wind":
				icons.add(document.getElementById("iconW1"), Skycons.WIND);
				break;
			case "fog":
				icons.add(document.getElementById("iconW1"), Skycons.FOG);
				break;
			case "cloudy":
				icons.add(document.getElementById("iconW1"), Skycons.CLOUDY);
				break;
			case "clear-day":
				icons.add(document.getElementById("iconW1"), Skycons.CLEAR_DAY);
				break;
			case "clear-night":
				icons.add(document.getElementById("iconW1"), Skycons.CLEAR_NIGHT);
				break;
			case "partly-cloudy-day":
				icons.add(document.getElementById("iconW1"), Skycons.PARTLY_CLOUDY_DAY);
				break;
			case "partly-cloudy-night":
				icons.add(document.getElementById("iconW1"), Skycons.PARTLY_CLOUDY_NIGHT);
				break;
			}
			
			switch(data.iconW2) {
			case "rain":
				icons.add(document.getElementById("iconW2"), Skycons.RAIN);
				break;
			case "snow":
				icons.add(document.getElementById("iconW2"), Skycons.SNOW);
				break;
			case "sleet":
				icons.add(document.getElementById("iconW2"), Skycons.SLEET);
				break;
			case "wind":
				icons.add(document.getElementById("iconW2"), Skycons.WIND);
				break;
			case "fog":
				icons.add(document.getElementById("iconW2"), Skycons.FOG);
				break;
			case "cloudy":
				icons.add(document.getElementById("iconW2"), Skycons.CLOUDY);
				break;
			case "clear-day":
				icons.add(document.getElementById("iconW2"), Skycons.CLEAR_DAY);
				break;
			case "clear-night":
				icons.add(document.getElementById("iconW2"), Skycons.CLEAR_NIGHT);
				break;
			case "partly-cloudy-day":
				icons.add(document.getElementById("iconW2"), Skycons.PARTLY_CLOUDY_DAY);
				break;
			case "partly-cloudy-night":
				icons.add(document.getElementById("iconW2"), Skycons.PARTLY_CLOUDY_NIGHT);
				break;
			}
			
			switch(data.iconW3) {
			case "rain":
				icons.add(document.getElementById("iconW3"), Skycons.RAIN);
				break;
			case "snow":
				icons.add(document.getElementById("iconW3"), Skycons.SNOW);
				break;
			case "sleet":
				icons.add(document.getElementById("iconW3"), Skycons.SLEET);
				break;
			case "wind":
				icons.add(document.getElementById("iconW3"), Skycons.WIND);
				break;
			case "fog":
				icons.add(document.getElementById("iconW3"), Skycons.FOG);
				break;
			case "cloudy":
				icons.add(document.getElementById("iconW3"), Skycons.CLOUDY);
				break;
			case "clear-day":
				icons.add(document.getElementById("iconW3"), Skycons.CLEAR_DAY);
				break;
			case "clear-night":
				icons.add(document.getElementById("iconW3"), Skycons.CLEAR_NIGHT);
				break;
			case "partly-cloudy-day":
				icons.add(document.getElementById("iconW3"), Skycons.PARTLY_CLOUDY_DAY);
				break;
			case "partly-cloudy-night":
				icons.add(document.getElementById("iconW3"), Skycons.PARTLY_CLOUDY_NIGHT);
				break;
			}
			
			switch(data.iconW4) {
			case "rain":
				icons.add(document.getElementById("iconW4"), Skycons.RAIN);
				break;
			case "snow":
				icons.add(document.getElementById("iconW4"), Skycons.SNOW);
				break;
			case "sleet":
				icons.add(document.getElementById("iconW4"), Skycons.SLEET);
				break;
			case "wind":
				icons.add(document.getElementById("iconW4"), Skycons.WIND);
				break;
			case "fog":
				icons.add(document.getElementById("iconW4"), Skycons.FOG);
				break;
			case "cloudy":
				icons.add(document.getElementById("iconW4"), Skycons.CLOUDY);
				break;
			case "clear-day":
				icons.add(document.getElementById("iconW4"), Skycons.CLEAR_DAY);
				break;
			case "clear-night":
				icons.add(document.getElementById("iconW4"), Skycons.CLEAR_NIGHT);
				break;
			case "partly-cloudy-day":
				icons.add(document.getElementById("iconW4"), Skycons.PARTLY_CLOUDY_DAY);
				break;
			case "partly-cloudy-night":
				icons.add(document.getElementById("iconW4"), Skycons.PARTLY_CLOUDY_NIGHT);
				break;
			}
			
			switch(data.iconW5) {
			case "rain":
				icons.add(document.getElementById("iconW5"), Skycons.RAIN);
				break;
			case "snow":
				icons.add(document.getElementById("iconW5"), Skycons.SNOW);
				break;
			case "sleet":
				icons.add(document.getElementById("iconW5"), Skycons.SLEET);
				break;
			case "wind":
				icons.add(document.getElementById("iconW5"), Skycons.WIND);
				break;
			case "fog":
				icons.add(document.getElementById("iconW5"), Skycons.FOG);
				break;
			case "cloudy":
				icons.add(document.getElementById("iconW5"), Skycons.CLOUDY);
				break;
			case "clear-day":
				icons.add(document.getElementById("iconW5"), Skycons.CLEAR_DAY);
				break;
			case "clear-night":
				icons.add(document.getElementById("iconW5"), Skycons.CLEAR_NIGHT);
				break;
			case "partly-cloudy-day":
				icons.add(document.getElementById("iconW5"), Skycons.PARTLY_CLOUDY_DAY);
				break;
			case "partly-cloudy-night":
				icons.add(document.getElementById("iconW5"), Skycons.PARTLY_CLOUDY_NIGHT);
				break;
			}
			
			switch(data.iconW6) {
			case "rain":
				icons.add(document.getElementById("iconW6"), Skycons.RAIN);
				break;
			case "snow":
				icons.add(document.getElementById("iconW6"), Skycons.SNOW);
				break;
			case "sleet":
				icons.add(document.getElementById("iconW6"), Skycons.SLEET);
				break;
			case "wind":
				icons.add(document.getElementById("iconW6"), Skycons.WIND);
				break;
			case "fog":
				icons.add(document.getElementById("iconW6"), Skycons.FOG);
				break;
			case "cloudy":
				icons.add(document.getElementById("iconW6"), Skycons.CLOUDY);
				break;
			case "clear-day":
				icons.add(document.getElementById("iconW6"), Skycons.CLEAR_DAY);
				break;
			case "clear-night":
				icons.add(document.getElementById("iconW6"), Skycons.CLEAR_NIGHT);
				break;
			case "partly-cloudy-day":
				icons.add(document.getElementById("iconW6"), Skycons.PARTLY_CLOUDY_DAY);
				break;
			case "partly-cloudy-night":
				icons.add(document.getElementById("iconW6"), Skycons.PARTLY_CLOUDY_NIGHT);
				break;
			}
			icons.play();
		}
	});
}

function refresh() {
	$.ajax({
		type : "GET",
		url : "/SmartMirrorWebProject/weather",
		error : function() {
			alert('error');
		},
		success : function(data) {
			$('#temperature').html(data.temp + "°");
			$('#summary').html(data.summary);
			$('#tempMax1').html(data.tempMax1);
			$('#tempMax2').html(data.tempMax2);
			$('#tempMax3').html(data.tempMax3);
			$('#tempMax4').html(data.tempMax4);
			$('#tempMax5').html(data.tempMax5);
			$('#tempMax6').html(data.tempMax6);
			$('#tempMin1').html(data.tempMin1);
			$('#tempMin2').html(data.tempMin2);
			$('#tempMin3').html(data.tempMin3);
			$('#tempMin4').html(data.tempMin4);
			$('#tempMin5').html(data.tempMin5);
			$('#tempMin6').html(data.tempMin6);
			$('#weekday1').html(data.week1);
			$('#weekday2').html(data.week2);
			$('#weekday3').html(data.week3);
			$('#weekday4').html(data.week4);
			$('#weekday5').html(data.week5);
			$('#weekday6').html(data.week6);
		}
	});
}

function drawIcon() {
	$.ajax({
		type : "GET",
		url : "/SmartMirrorWebProject/weather",
		error : function() {
			alert('error');
		},
		success : function(data) {
			var icons = new Skycons({
				"color" : "white"
			});
			
			console.log("pass");
			switch(data.icon) {
			case "rain":
				icons.add(document.getElementById("icon"), Skycons.RAIN);
				break;
			case "snow":
				icons.add(document.getElementById("icon"), Skycons.SNOW);
				break;
			case "sleet":
				icons.add(document.getElementById("icon"), Skycons.SLEET);
				break;
			case "wind":
				icons.add(document.getElementById("icon"), Skycons.WIND);
				break;
			case "fog":
				icons.add(document.getElementById("icon"), Skycons.FOG);
				break;
			case "cloudy":
				icons.add(document.getElementById("icon"), Skycons.CLOUDY);
				break;
			case "clear-day":
				icons.add(document.getElementById("icon"), Skycons.CLEAR_DAY);
				break;
			case "clear-night":
				icons.add(document.getElementById("icon"), Skycons.CLEAR_NIGHT);
				break;
			case "partly-cloudy-day":
				icons.add(document.getElementById("icon"), Skycons.PARTLY_CLOUDY_DAY);
				break;
			case "partly-cloudy-night":
				icons.add(document.getElementById("icon"), Skycons.PARTLY_CLOUDY_NIGHT);
				break;
			}
			
			switch(data.iconW1) {
			case "rain":
				icons.add(document.getElementById("iconW1"), Skycons.RAIN);
				break;
			case "snow":
				icons.add(document.getElementById("iconW1"), Skycons.SNOW);
				break;
			case "sleet":
				icons.add(document.getElementById("iconW1"), Skycons.SLEET);
				break;
			case "wind":
				icons.add(document.getElementById("iconW1"), Skycons.WIND);
				break;
			case "fog":
				icons.add(document.getElementById("iconW1"), Skycons.FOG);
				break;
			case "cloudy":
				icons.add(document.getElementById("iconW1"), Skycons.CLOUDY);
				break;
			case "clear-day":
				icons.add(document.getElementById("iconW1"), Skycons.CLEAR_DAY);
				break;
			case "clear-night":
				icons.add(document.getElementById("iconW1"), Skycons.CLEAR_NIGHT);
				break;
			case "partly-cloudy-day":
				icons.add(document.getElementById("iconW1"), Skycons.PARTLY_CLOUDY_DAY);
				break;
			case "partly-cloudy-night":
				icons.add(document.getElementById("iconW1"), Skycons.PARTLY_CLOUDY_NIGHT);
				break;
			}
			
			switch(data.iconW2) {
			case "rain":
				icons.add(document.getElementById("iconW2"), Skycons.RAIN);
				break;
			case "snow":
				icons.add(document.getElementById("iconW2"), Skycons.SNOW);
				break;
			case "sleet":
				icons.add(document.getElementById("iconW2"), Skycons.SLEET);
				break;
			case "wind":
				icons.add(document.getElementById("iconW2"), Skycons.WIND);
				break;
			case "fog":
				icons.add(document.getElementById("iconW2"), Skycons.FOG);
				break;
			case "cloudy":
				icons.add(document.getElementById("iconW2"), Skycons.CLOUDY);
				break;
			case "clear-day":
				icons.add(document.getElementById("iconW2"), Skycons.CLEAR_DAY);
				break;
			case "clear-night":
				icons.add(document.getElementById("iconW2"), Skycons.CLEAR_NIGHT);
				break;
			case "partly-cloudy-day":
				icons.add(document.getElementById("iconW2"), Skycons.PARTLY_CLOUDY_DAY);
				break;
			case "partly-cloudy-night":
				icons.add(document.getElementById("iconW2"), Skycons.PARTLY_CLOUDY_NIGHT);
				break;
			}
			
			switch(data.iconW3) {
			case "rain":
				icons.add(document.getElementById("iconW3"), Skycons.RAIN);
				break;
			case "snow":
				icons.add(document.getElementById("iconW3"), Skycons.SNOW);
				break;
			case "sleet":
				icons.add(document.getElementById("iconW3"), Skycons.SLEET);
				break;
			case "wind":
				icons.add(document.getElementById("iconW3"), Skycons.WIND);
				break;
			case "fog":
				icons.add(document.getElementById("iconW3"), Skycons.FOG);
				break;
			case "cloudy":
				icons.add(document.getElementById("iconW3"), Skycons.CLOUDY);
				break;
			case "clear-day":
				icons.add(document.getElementById("iconW3"), Skycons.CLEAR_DAY);
				break;
			case "clear-night":
				icons.add(document.getElementById("iconW3"), Skycons.CLEAR_NIGHT);
				break;
			case "partly-cloudy-day":
				icons.add(document.getElementById("iconW3"), Skycons.PARTLY_CLOUDY_DAY);
				break;
			case "partly-cloudy-night":
				icons.add(document.getElementById("iconW3"), Skycons.PARTLY_CLOUDY_NIGHT);
				break;
			}
			
			switch(data.iconW4) {
			case "rain":
				icons.add(document.getElementById("iconW4"), Skycons.RAIN);
				break;
			case "snow":
				icons.add(document.getElementById("iconW4"), Skycons.SNOW);
				break;
			case "sleet":
				icons.add(document.getElementById("iconW4"), Skycons.SLEET);
				break;
			case "wind":
				icons.add(document.getElementById("iconW4"), Skycons.WIND);
				break;
			case "fog":
				icons.add(document.getElementById("iconW4"), Skycons.FOG);
				break;
			case "cloudy":
				icons.add(document.getElementById("iconW4"), Skycons.CLOUDY);
				break;
			case "clear-day":
				icons.add(document.getElementById("iconW4"), Skycons.CLEAR_DAY);
				break;
			case "clear-night":
				icons.add(document.getElementById("iconW4"), Skycons.CLEAR_NIGHT);
				break;
			case "partly-cloudy-day":
				icons.add(document.getElementById("iconW4"), Skycons.PARTLY_CLOUDY_DAY);
				break;
			case "partly-cloudy-night":
				icons.add(document.getElementById("iconW4"), Skycons.PARTLY_CLOUDY_NIGHT);
				break;
			}
			
			switch(data.iconW5) {
			case "rain":
				icons.add(document.getElementById("iconW5"), Skycons.RAIN);
				break;
			case "snow":
				icons.add(document.getElementById("iconW5"), Skycons.SNOW);
				break;
			case "sleet":
				icons.add(document.getElementById("iconW5"), Skycons.SLEET);
				break;
			case "wind":
				icons.add(document.getElementById("iconW5"), Skycons.WIND);
				break;
			case "fog":
				icons.add(document.getElementById("iconW5"), Skycons.FOG);
				break;
			case "cloudy":
				icons.add(document.getElementById("iconW5"), Skycons.CLOUDY);
				break;
			case "clear-day":
				icons.add(document.getElementById("iconW5"), Skycons.CLEAR_DAY);
				break;
			case "clear-night":
				icons.add(document.getElementById("iconW5"), Skycons.CLEAR_NIGHT);
				break;
			case "partly-cloudy-day":
				icons.add(document.getElementById("iconW5"), Skycons.PARTLY_CLOUDY_DAY);
				break;
			case "partly-cloudy-night":
				icons.add(document.getElementById("iconW5"), Skycons.PARTLY_CLOUDY_NIGHT);
				break;
			}
			
			switch(data.iconW6) {
			case "rain":
				icons.add(document.getElementById("iconW6"), Skycons.RAIN);
				break;
			case "snow":
				icons.add(document.getElementById("iconW6"), Skycons.SNOW);
				break;
			case "sleet":
				icons.add(document.getElementById("iconW6"), Skycons.SLEET);
				break;
			case "wind":
				icons.add(document.getElementById("iconW6"), Skycons.WIND);
				break;
			case "fog":
				icons.add(document.getElementById("iconW6"), Skycons.FOG);
				break;
			case "cloudy":
				icons.add(document.getElementById("iconW6"), Skycons.CLOUDY);
				break;
			case "clear-day":
				icons.add(document.getElementById("iconW6"), Skycons.CLEAR_DAY);
				break;
			case "clear-night":
				icons.add(document.getElementById("iconW6"), Skycons.CLEAR_NIGHT);
				break;
			case "partly-cloudy-day":
				icons.add(document.getElementById("iconW6"), Skycons.PARTLY_CLOUDY_DAY);
				break;
			case "partly-cloudy-night":
				icons.add(document.getElementById("iconW6"), Skycons.PARTLY_CLOUDY_NIGHT);
				break;
			}
			icons.play();
		}
	});
}