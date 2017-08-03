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

function openAnimation() {
	var target = document.querySelector('#content');
	var player = target.animate([
		  {opacity:0},
		  {opacity:1}
		], 1000);
}

function closeAnimation() {
	var target = document.querySelector('#content');
	var player = target.animate([
		  {opacity:1},
		  {opacity:0}
		], 1000);
}
//function snapshot() {
//	$.ajax({
//		type : "GET",
//		url : "/SmartMirrorWebProject/snapshot",
//		error : function() {
//			alert('error');
//		},
//		success : function(data) {
//			var modal = document.getElementById('myModal');
//			$("#snapshot").attr("src", data.filepath);
//			setTimeout(showModal, 1000);
//
//			setTimeout(closeModal, 3000);
//		}
//	});
//}
//
//function showModal() {
//	modal.style.display = "block";
//}
//
//function closeModal() {
//	modal.style.display = "none";
//}

function close() {
	closeAnimation();
	setTimeout( function(){ 
		$('#content').empty(); 
		$("#help").html("\"사용 가능한 명령어\"라고 말해보세요.");}
	,1200);
}