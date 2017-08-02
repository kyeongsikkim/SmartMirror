function openCalander() {
	$.ajax({
	    type : "GET",
	    url : "/SmartMirrorWebProject/calander",
	    dataType : "text",
	    error : function() {
	      alert('error');
	    },
	    success : function(data) {
	      $('#content').html(data);
	    }
	  });
}

function openMap() {
	$.ajax({
	    type : "GET",
	    url : "/SmartMirrorWebProject/map",
	    dataType : "text",
	    error : function() {
	      alert('error');
	    },
	    success : function(data) {
	      $('#content').html(data);
	      initMap();
	    }
	  });
}

function openCamera() {
	$.ajax({
	    type : "GET",
	    url : "/SmartMirrorWebProject/camera",
	    dataType : "text",
	    error : function() {
	      alert('error');
	    },
	    success : function(data) {
	      $('#content').html(data);
	    }
	  });
}

function openYoutube() {
	$.ajax({
		type: "GET",
		url: "/SmartMirrorWebProject/youtube",
		dataType: "text",
		success: function(data) {
			$('#content').html(data);
		}
	});
}

function openWeather() {
	$.ajax({
		type: "GET",
		url: "/SmartMirrorWebProject/weather_detail",
		dataType: "text",
		success: function(data) {
			$('#content').html(data);
		}
	});
}

function close() {
	$('#content').empty();
}