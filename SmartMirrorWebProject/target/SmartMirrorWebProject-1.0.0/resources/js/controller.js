function close() {
		$("#content").empty(); 
		$("#camera").empty();
		$("#help").html("\"아리아\"를 불러보세요.");
		$("#speech").html("");
}

function openCalendar() {
	$.ajax({
		type : "GET",
		url : "/SmartMirrorWebProject/calendar",
		dataType : "text",
		success : function(data) {
			openAnimation();
			$("#content").html(data);
			initCalendar();
		}
	});
}

function openMap() {
	$.ajax({
		type : "GET",
		url : "/SmartMirrorWebProject/map",
		dataType : "text",
		success : function(data) {
			openAnimation();
			$("#content").html(data);
			initMap();
		}
	});
}

function openCommand() {
	$.ajax({
		type : "GET",
		url : "/SmartMirrorWebProject/command",
		dataType : "text",
		success : function(data) {
			openAnimation();
			$("#content").html(data);
		}
	});
}

function openCamera() {
	$.ajax({
		type : "GET",
		url : "/SmartMirrorWebProject/camera",
		dataType : "text",
		success : function(data) {
			openAnimation();
			$("#camera").html(data);
		}
	});
}

function openAudio() {
	$.ajax({
		type : "GET",
		url : "/SmartMirrorWebProject/audio",
		dataType : "text",
		error : function() {
			alert("error");
		},
		success : function(data) {
			openAnimation();
			$("#content").html(data);
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
			$("#content").html(data);
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
			$("#content").html(data);
		}
	});
}

function openWeather() {
	$.ajax({
		type: "GET",
		url: "/SmartMirrorWebProject/weather_View",
		dataType: "text",
		success: function(data) {
			$("#content").html(data);
		}
	});
}

function openWeatherDefault() {
	$.ajax({
		type: "GET",
		url: "/SmartMirrorWebProject/weatherDefault",
		dataType: "text",
		success: function(data) {
			$("#content").html(data);
		}
	});
}

function openBoxOffice() {
	$.ajax({
		type : "GET",
		url : "/SmartMirrorWebProject/movie",
		success : function(data) {
			openAnimation();
			$("#content").html(data);
		}
	});
}

function openSubway() {
	$.ajax({
		type : "GET",
		url : "/SmartMirrorWebProject/subway",
		error : function() {
			alert("error");
		},
		success : function(data) {
			openAnimation();
			$("#content").html(data);
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
