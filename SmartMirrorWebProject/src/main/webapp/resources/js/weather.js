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

			switch(data.icon) {
			case "rain":
				$("#iconcell").html("<img src='/SmartMirrorWebProject/resources/images/rainy.svg' width='110%'>");
				break;
			case "snow":
				$("#iconcell").html("<img src='/SmartMirrorWebProject/resources/images/snowy.svg' width='110%'>");
				break;
			case "sleet":
				$("#iconcell").html("<img src='/SmartMirrorWebProject/resources/images/sleet.svg' width='110%'>");
				break;
			case "wind":
				$("#iconcell").html("<img src='/SmartMirrorWebProject/resources/images/cloudy.svg' width='110%'>");
				break;
			case "fog":
				$("#iconcell").html("<img src='/SmartMirrorWebProject/resources/images/cloudy.svg' width='110%'>");
				break;
			case "cloudy":
				$("#iconcell").html("<img src='/SmartMirrorWebProject/resources/images/cloudy.svg' width='110%'>");
				break;
			case "clear-day":
				$("#iconcell").html("<img src='/SmartMirrorWebProject/resources/images/day.svg' width='110%'>");
				break;
			case "clear-night":
				$("#iconcell").html("<img src='/SmartMirrorWebProject/resources/images/night.svg' width='110%'>");
				break;
			case "partly-cloudy-day":
				$("#iconcell").html("<img src='/SmartMirrorWebProject/resources/images/cloudyday.svg' width='110%'>");
				break;
			case "partly-cloudy-night":
				$("#iconcell").html("<img src='/SmartMirrorWebProject/resources/images/cloudynight.svg' width='110%'>");
				break;
			}

			// ------------------------------------------------------------------------------

			switch(data.iconW1) {
			case "rain":
				$("#iconW1").html("<img src='/SmartMirrorWebProject/resources/images/rainy.svg' width='50px'>");
				break;
			case "snow":
				$("#iconW1").html("<img src='/SmartMirrorWebProject/resources/images/snowy.svg' width='50px'>");
				break;
			case "sleet":
				$("#iconW1").html("<img src='/SmartMirrorWebProject/resources/images/sleet.svg' width='50px'>");
				break;
			case "wind":
				$("#iconW1").html("<img src='/SmartMirrorWebProject/resources/images/cloudy.svg' width='50px'>");
				break;
			case "fog":
				$("#iconW1").html("<img src='/SmartMirrorWebProject/resources/images/cloudy.svg' width='50px'>");
				break;
			case "cloudy":
				$("#iconW1").html("<img src='/SmartMirrorWebProject/resources/images/cloudy.svg' width='50px'>");
				break;
			case "clear-day":
				$("#iconW1").html("<img src='/SmartMirrorWebProject/resources/images/day.svg' width='50px'>");
				break;
			case "clear-night":
				$("#iconW1").html("<img src='/SmartMirrorWebProject/resources/images/night.svg' width='50px'>");
				break;
			case "partly-cloudy-day":
				$("#iconW1").html("<img src='/SmartMirrorWebProject/resources/images/cloudyday.svg' width='50px'>");
				break;
			case "partly-cloudy-night":
				$("#iconW1").html("<img src='/SmartMirrorWebProject/resources/images/cloudynight.svg' width='50px'>");
				break;
			}
			
			switch(data.iconW2) {
			case "rain":
				$("#iconW2").html("<img src='/SmartMirrorWebProject/resources/images/rainy.svg' width='50px'>");
				break;
			case "snow":
				$("#iconW2").html("<img src='/SmartMirrorWebProject/resources/images/snowy.svg' width='50px'>");
				break;
			case "sleet":
				$("#iconW2").html("<img src='/SmartMirrorWebProject/resources/images/sleet.svg' width='50px'>");
				break;
			case "wind":
				$("#iconW2").html("<img src='/SmartMirrorWebProject/resources/images/cloudy.svg' width='50px'>");
				break;
			case "fog":
				$("#iconW2").html("<img src='/SmartMirrorWebProject/resources/images/cloudy.svg' width='50px'>");
				break;
			case "cloudy":
				$("#iconW2").html("<img src='/SmartMirrorWebProject/resources/images/cloudy.svg' width='50px'>");
				break;
			case "clear-day":
				$("#iconW2").html("<img src='/SmartMirrorWebProject/resources/images/day.svg' width='50px'>");
				break;
			case "clear-night":
				$("#iconW2").html("<img src='/SmartMirrorWebProject/resources/images/night.svg' width='50px'>");
				break;
			case "partly-cloudy-day":
				$("#iconW2").html("<img src='/SmartMirrorWebProject/resources/images/cloudyday.svg' width='50px'>");
				break;
			case "partly-cloudy-night":
				$("#iconW2").html("<img src='/SmartMirrorWebProject/resources/images/cloudynight.svg' width='50px'>");
				break;
			}
			
			switch(data.iconW3) {
			case "rain":
				$("#iconW3").html("<img src='/SmartMirrorWebProject/resources/images/rainy.svg' width='50px'>");
				break;
			case "snow":
				$("#iconW3").html("<img src='/SmartMirrorWebProject/resources/images/snowy.svg' width='50px'>");
				break;
			case "sleet":
				$("#iconW3").html("<img src='/SmartMirrorWebProject/resources/images/sleet.svg' width='50px'>");
				break;
			case "wind":
				$("#iconW3").html("<img src='/SmartMirrorWebProject/resources/images/cloudy.svg' width='50px'>");
				break;
			case "fog":
				$("#iconW3").html("<img src='/SmartMirrorWebProject/resources/images/cloudy.svg' width='50px'>");
				break;
			case "cloudy":
				$("#iconW3").html("<img src='/SmartMirrorWebProject/resources/images/cloudy.svg' width='50px'>");
				break;
			case "clear-day":
				$("#iconW3").html("<img src='/SmartMirrorWebProject/resources/images/day.svg' width='50px'>");
				break;
			case "clear-night":
				$("#iconW3").html("<img src='/SmartMirrorWebProject/resources/images/night.svg' width='50px'>");
				break;
			case "partly-cloudy-day":
				$("#iconW3").html("<img src='/SmartMirrorWebProject/resources/images/cloudyday.svg' width='50px'>");
				break;
			case "partly-cloudy-night":
				$("#iconW3").html("<img src='/SmartMirrorWebProject/resources/images/cloudynight.svg' width='50px'>");
				break;
			}
			
			switch(data.iconW4) {
			case "rain":
				$("#iconW4").html("<img src='/SmartMirrorWebProject/resources/images/rainy.svg' width='50px'>");
				break;
			case "snow":
				$("#iconW4").html("<img src='/SmartMirrorWebProject/resources/images/snowy.svg' width='50px'>");
				break;
			case "sleet":
				$("#iconW4").html("<img src='/SmartMirrorWebProject/resources/images/sleet.svg' width='50px'>");
				break;
			case "wind":
				$("#iconW4").html("<img src='/SmartMirrorWebProject/resources/images/cloudy.svg' width='50px'>");
				break;
			case "fog":
				$("#iconW4").html("<img src='/SmartMirrorWebProject/resources/images/cloudy.svg' width='50px'>");
				break;
			case "cloudy":
				$("#iconW4").html("<img src='/SmartMirrorWebProject/resources/images/cloudy.svg' width='50px'>");
				break;
			case "clear-day":
				$("#iconW4").html("<img src='/SmartMirrorWebProject/resources/images/day.svg' width='50px'>");
				break;
			case "clear-night":
				$("#iconW4").html("<img src='/SmartMirrorWebProject/resources/images/night.svg' width='50px'>");
				break;
			case "partly-cloudy-day":
				$("#iconW4").html("<img src='/SmartMirrorWebProject/resources/images/cloudyday.svg' width='50px'>");
				break;
			case "partly-cloudy-night":
				$("#iconW4").html("<img src='/SmartMirrorWebProject/resources/images/cloudynight.svg' width='50px'>");
				break;
			}
			
			switch(data.iconW5) {
			case "rain":
				$("#iconW5").html("<img src='/SmartMirrorWebProject/resources/images/rainy.svg' width='50px'>");
				break;
			case "snow":
				$("#iconW5").html("<img src='/SmartMirrorWebProject/resources/images/snowy.svg' width='50px'>");
				break;
			case "sleet":
				$("#iconW5").html("<img src='/SmartMirrorWebProject/resources/images/sleet.svg' width='50px'>");
				break;
			case "wind":
				$("#iconW5").html("<img src='/SmartMirrorWebProject/resources/images/cloudy.svg' width='50px'>");
				break;
			case "fog":
				$("#iconW5").html("<img src='/SmartMirrorWebProject/resources/images/cloudy.svg' width='50px'>");
				break;
			case "cloudy":
				$("#iconW5").html("<img src='/SmartMirrorWebProject/resources/images/cloudy.svg' width='50px'>");
				break;
			case "clear-day":
				$("#iconW5").html("<img src='/SmartMirrorWebProject/resources/images/day.svg' width='50px'>");
				break;
			case "clear-night":
				$("#iconW5").html("<img src='/SmartMirrorWebProject/resources/images/night.svg' width='50px'>");
				break;
			case "partly-cloudy-day":
				$("#iconW5").html("<img src='/SmartMirrorWebProject/resources/images/cloudyday.svg' width='50px'>");
				break;
			case "partly-cloudy-night":
				$("#iconW5").html("<img src='/SmartMirrorWebProject/resources/images/cloudynight.svg' width='50px'>");
				break;
			}
			
			switch(data.iconW6) {
			case "rain":
				$("#iconW6").html("<img src='/SmartMirrorWebProject/resources/images/rainy.svg' width='50px'>");
				break;
			case "snow":
				$("#iconW6").html("<img src='/SmartMirrorWebProject/resources/images/snowy.svg' width='50px'>");
				break;
			case "sleet":
				$("#iconW6").html("<img src='/SmartMirrorWebProject/resources/images/sleet.svg' width='50px'>");
				break;
			case "wind":
				$("#iconW6").html("<img src='/SmartMirrorWebProject/resources/images/cloudy.svg' width='50px'>");
				break;
			case "fog":
				$("#iconW6").html("<img src='/SmartMirrorWebProject/resources/images/cloudy.svg' width='50px'>");
				break;
			case "cloudy":
				$("#iconW6").html("<img src='/SmartMirrorWebProject/resources/images/cloudy.svg' width='50px'>");
				break;
			case "clear-day":
				$("#iconW6").html("<img src='/SmartMirrorWebProject/resources/images/day.svg' width='50px'>");
				break;
			case "clear-night":
				$("#iconW6").html("<img src='/SmartMirrorWebProject/resources/images/night.svg' width='50px'>");
				break;
			case "partly-cloudy-day":
				$("#iconW6").html("<img src='/SmartMirrorWebProject/resources/images/cloudyday.svg' width='50px'>");
				break;
			case "partly-cloudy-night":
				$("#iconW6").html("<img src='/SmartMirrorWebProject/resources/images/cloudynight.svg' width='50px'>");
				break;
			}
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
			
			switch(data.icon) {
			case "rain":
				$("#iconcell").html("<img src='/SmartMirrorWebProject/resources/images/rainy.svg' width='110%'>");
				break;
			case "snow":
				$("#iconcell").html("<img src='/SmartMirrorWebProject/resources/images/snowy.svg' width='110%'>");
				break;
			case "sleet":
				$("#iconcell").html("<img src='/SmartMirrorWebProject/resources/images/sleet.svg' width='110%'>");
				break;
			case "wind":
				$("#iconcell").html("<img src='/SmartMirrorWebProject/resources/images/cloudy.svg' width='110%'>");
				break;
			case "fog":
				$("#iconcell").html("<img src='/SmartMirrorWebProject/resources/images/cloudy.svg' width='110%'>");
				break;
			case "cloudy":
				$("#iconcell").html("<img src='/SmartMirrorWebProject/resources/images/cloudy.svg' width='110%'>");
				break;
			case "clear-day":
				$("#iconcell").html("<img src='/SmartMirrorWebProject/resources/images/day.svg' width='110%'>");
				break;
			case "clear-night":
				$("#iconcell").html("<img src='/SmartMirrorWebProject/resources/images/night.svg' width='110%'>");
				break;
			case "partly-cloudy-day":
				$("#iconcell").html("<img src='/SmartMirrorWebProject/resources/images/cloudyday.svg' width='110%'>");
				break;
			case "partly-cloudy-night":
				$("#iconcell").html("<img src='/SmartMirrorWebProject/resources/images/cloudynight.svg' width='110%'>");
				break;
			}
			
			switch(data.iconW1) {
			case "rain":
				$("#iconW1").html("<img src='/SmartMirrorWebProject/resources/images/rainy.svg' width='50px'>");
				break;
			case "snow":
				$("#iconW1").html("<img src='/SmartMirrorWebProject/resources/images/snowy.svg' width='50px'>");
				break;
			case "sleet":
				$("#iconW1").html("<img src='/SmartMirrorWebProject/resources/images/sleet.svg' width='50px'>");
				break;
			case "wind":
				$("#iconW1").html("<img src='/SmartMirrorWebProject/resources/images/cloudy.svg' width='50px'>");
				break;
			case "fog":
				$("#iconW1").html("<img src='/SmartMirrorWebProject/resources/images/cloudy.svg' width='50px'>");
				break;
			case "cloudy":
				$("#iconW1").html("<img src='/SmartMirrorWebProject/resources/images/cloudy.svg' width='50px'>");
				break;
			case "clear-day":
				$("#iconW1").html("<img src='/SmartMirrorWebProject/resources/images/day.svg' width='50px'>");
				break;
			case "clear-night":
				$("#iconW1").html("<img src='/SmartMirrorWebProject/resources/images/night.svg' width='50px'>");
				break;
			case "partly-cloudy-day":
				$("#iconW1").html("<img src='/SmartMirrorWebProject/resources/images/cloudyday.svg' width='50px'>");
				break;
			case "partly-cloudy-night":
				$("#iconW1").html("<img src='/SmartMirrorWebProject/resources/images/cloudynight.svg' width='50px'>");
				break;
			}
			
			switch(data.iconW2) {
			case "rain":
				$("#iconW2").html("<img src='/SmartMirrorWebProject/resources/images/rainy.svg' width='50px'>");
				break;
			case "snow":
				$("#iconW2").html("<img src='/SmartMirrorWebProject/resources/images/snowy.svg' width='50px'>");
				break;
			case "sleet":
				$("#iconW2").html("<img src='/SmartMirrorWebProject/resources/images/sleet.svg' width='50px'>");
				break;
			case "wind":
				$("#iconW2").html("<img src='/SmartMirrorWebProject/resources/images/cloudy.svg' width='50px'>");
				break;
			case "fog":
				$("#iconW2").html("<img src='/SmartMirrorWebProject/resources/images/cloudy.svg' width='50px'>");
				break;
			case "cloudy":
				$("#iconW2").html("<img src='/SmartMirrorWebProject/resources/images/cloudy.svg' width='50px'>");
				break;
			case "clear-day":
				$("#iconW2").html("<img src='/SmartMirrorWebProject/resources/images/day.svg' width='50px'>");
				break;
			case "clear-night":
				$("#iconW2").html("<img src='/SmartMirrorWebProject/resources/images/night.svg' width='50px'>");
				break;
			case "partly-cloudy-day":
				$("#iconW2").html("<img src='/SmartMirrorWebProject/resources/images/cloudyday.svg' width='50px'>");
				break;
			case "partly-cloudy-night":
				$("#iconW2").html("<img src='/SmartMirrorWebProject/resources/images/cloudynight.svg' width='50px'>");
				break;
			}
			
			switch(data.iconW3) {
			case "rain":
				$("#iconW3").html("<img src='/SmartMirrorWebProject/resources/images/rainy.svg' width='50px'>");
				break;
			case "snow":
				$("#iconW3").html("<img src='/SmartMirrorWebProject/resources/images/snowy.svg' width='50px'>");
				break;
			case "sleet":
				$("#iconW3").html("<img src='/SmartMirrorWebProject/resources/images/sleet.svg' width='50px'>");
				break;
			case "wind":
				$("#iconW3").html("<img src='/SmartMirrorWebProject/resources/images/cloudy.svg' width='50px'>");
				break;
			case "fog":
				$("#iconW3").html("<img src='/SmartMirrorWebProject/resources/images/cloudy.svg' width='50px'>");
				break;
			case "cloudy":
				$("#iconW3").html("<img src='/SmartMirrorWebProject/resources/images/cloudy.svg' width='50px'>");
				break;
			case "clear-day":
				$("#iconW3").html("<img src='/SmartMirrorWebProject/resources/images/day.svg' width='50px'>");
				break;
			case "clear-night":
				$("#iconW3").html("<img src='/SmartMirrorWebProject/resources/images/night.svg' width='50px'>");
				break;
			case "partly-cloudy-day":
				$("#iconW3").html("<img src='/SmartMirrorWebProject/resources/images/cloudyday.svg' width='50px'>");
				break;
			case "partly-cloudy-night":
				$("#iconW3").html("<img src='/SmartMirrorWebProject/resources/images/cloudynight.svg' width='50px'>");
				break;
			}
			
			switch(data.iconW4) {
			case "rain":
				$("#iconW4").html("<img src='/SmartMirrorWebProject/resources/images/rainy.svg' width='50px'>");
				break;
			case "snow":
				$("#iconW4").html("<img src='/SmartMirrorWebProject/resources/images/snowy.svg' width='50px'>");
				break;
			case "sleet":
				$("#iconW4").html("<img src='/SmartMirrorWebProject/resources/images/sleet.svg' width='50px'>");
				break;
			case "wind":
				$("#iconW4").html("<img src='/SmartMirrorWebProject/resources/images/cloudy.svg' width='50px'>");
				break;
			case "fog":
				$("#iconW4").html("<img src='/SmartMirrorWebProject/resources/images/cloudy.svg' width='50px'>");
				break;
			case "cloudy":
				$("#iconW4").html("<img src='/SmartMirrorWebProject/resources/images/cloudy.svg' width='50px'>");
				break;
			case "clear-day":
				$("#iconW4").html("<img src='/SmartMirrorWebProject/resources/images/day.svg' width='50px'>");
				break;
			case "clear-night":
				$("#iconW4").html("<img src='/SmartMirrorWebProject/resources/images/night.svg' width='50px'>");
				break;
			case "partly-cloudy-day":
				$("#iconW4").html("<img src='/SmartMirrorWebProject/resources/images/cloudyday.svg' width='50px'>");
				break;
			case "partly-cloudy-night":
				$("#iconW4").html("<img src='/SmartMirrorWebProject/resources/images/cloudynight.svg' width='50px'>");
				break;
			}
			
			switch(data.iconW5) {
			case "rain":
				$("#iconW5").html("<img src='/SmartMirrorWebProject/resources/images/rainy.svg' width='50px'>");
				break;
			case "snow":
				$("#iconW5").html("<img src='/SmartMirrorWebProject/resources/images/snowy.svg' width='50px'>");
				break;
			case "sleet":
				$("#iconW5").html("<img src='/SmartMirrorWebProject/resources/images/sleet.svg' width='50px'>");
				break;
			case "wind":
				$("#iconW5").html("<img src='/SmartMirrorWebProject/resources/images/cloudy.svg' width='50px'>");
				break;
			case "fog":
				$("#iconW5").html("<img src='/SmartMirrorWebProject/resources/images/cloudy.svg' width='50px'>");
				break;
			case "cloudy":
				$("#iconW5").html("<img src='/SmartMirrorWebProject/resources/images/cloudy.svg' width='50px'>");
				break;
			case "clear-day":
				$("#iconW5").html("<img src='/SmartMirrorWebProject/resources/images/day.svg' width='50px'>");
				break;
			case "clear-night":
				$("#iconW5").html("<img src='/SmartMirrorWebProject/resources/images/night.svg' width='50px'>");
				break;
			case "partly-cloudy-day":
				$("#iconW5").html("<img src='/SmartMirrorWebProject/resources/images/cloudyday.svg' width='50px'>");
				break;
			case "partly-cloudy-night":
				$("#iconW5").html("<img src='/SmartMirrorWebProject/resources/images/cloudynight.svg' width='50px'>");
				break;
			}
			
			switch(data.iconW6) {
			case "rain":
				$("#iconW6").html("<img src='/SmartMirrorWebProject/resources/images/rainy.svg' width='50px'>");
				break;
			case "snow":
				$("#iconW6").html("<img src='/SmartMirrorWebProject/resources/images/snowy.svg' width='50px'>");
				break;
			case "sleet":
				$("#iconW6").html("<img src='/SmartMirrorWebProject/resources/images/sleet.svg' width='50px'>");
				break;
			case "wind":
				$("#iconW6").html("<img src='/SmartMirrorWebProject/resources/images/cloudy.svg' width='50px'>");
				break;
			case "fog":
				$("#iconW6").html("<img src='/SmartMirrorWebProject/resources/images/cloudy.svg' width='50px'>");
				break;
			case "cloudy":
				$("#iconW6").html("<img src='/SmartMirrorWebProject/resources/images/cloudy.svg' width='50px'>");
				break;
			case "clear-day":
				$("#iconW6").html("<img src='/SmartMirrorWebProject/resources/images/day.svg' width='50px'>");
				break;
			case "clear-night":
				$("#iconW6").html("<img src='/SmartMirrorWebProject/resources/images/night.svg' width='50px'>");
				break;
			case "partly-cloudy-day":
				$("#iconW6").html("<img src='/SmartMirrorWebProject/resources/images/cloudyday.svg' width='50px'>");
				break;
			case "partly-cloudy-night":
				$("#iconW6").html("<img src='/SmartMirrorWebProject/resources/images/cloudynight.svg' width='50px'>");
				break;
			}
		}
	});
}