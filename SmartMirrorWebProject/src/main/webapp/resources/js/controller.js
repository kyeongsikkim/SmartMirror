function close() {
		$('#content').empty(); 
		$("#help").html("\"명령어\"라고 말해보세요.");
}

function openCalendar() {
	$.ajax({
		type : "GET",
		url : "/SmartMirrorWebProject/calendar",
		dataType : "text",
		error : function() {
			alert('error');
		},
		success : function(data) {
			openAnimation();
			$('#content').html(data);
			initCalendar();
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
			openAnimation();
			$('#content').html(data);
			initMap();
		}
	});
}

function openCommand() {
	$.ajax({
		type : "GET",
		url : "/SmartMirrorWebProject/command",
		dataType : "text",
		error : function() {
			alert('error');
		},
		success : function(data) {
			openAnimation();
			$('#content').html(data);
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
			openAnimation();
			$('#content').html(data);
		}
	});
}

function openAudio() {
	$.ajax({
		type : "GET",
		url : "/SmartMirrorWebProject/audio",
		dataType : "text",
		error : function() {
			alert('error');
		},
		success : function(data) {
			openAnimation();
			$('#content').html(data);
		}
	});
}

function openYoutubeList(command) {
	$.ajax({
		type: "GET",
		url: "/SmartMirrorWebProject/youtubevideolist",
		dataType: "text",
		success: function(data) {
			youtubeSearch(command);
			$('#content').html(data);
		}
	});
}

function openVideo(number) {
	$.ajax({
		type: "GET",
		url: "/SmartMirrorWebProject/video",
		dataType: "text",
		success: function(data) {
			playVideo(number);
			$('#content').html(data);
		}
	});
}

function openWeather() {
	$.ajax({
		type: "GET",
		url: "/SmartMirrorWebProject/weather_View",
		dataType: "text",
		success: function(data) {
			$('#content').html(data);
		}
	});
}

function openBoxOffice() {
	$.ajax({
		type : "GET",
		url : "/SmartMirrorWebProject/movie",
		error : function() {
			alert('error');
		},
		success : function(data) {
			openAnimation();
			$('#content').html(data);
		}
	});
}

function openAnimation() {
	var target = document.querySelector('#content');
	var player = target.animate([
		  {opacity:0},
		  {opacity:1}
		], 1000);
}
