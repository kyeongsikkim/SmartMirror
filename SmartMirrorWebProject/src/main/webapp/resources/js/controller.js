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

function openYoutube() {
	$.ajax({
		type : "GET",
		url : "/SmartMirrorWebProject/youtube",
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

function close() {
		$('#content').empty(); 
		$("#help").html("\"명령어\"라고 말해보세요.");
}

function openAnimation() {
	var target = document.querySelector('#content');
	var player = target.animate([
		  {opacity:0},
		  {opacity:1}
		], 1000);
}
//
//function closeAnimation() {
//var target = document.querySelector('#content');
//var player = target.animate([
//	  {opacity:1},
//	  {opacity:0}
//	], 1000);
//}