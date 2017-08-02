function openCalendar() {
	$.ajax({
		type : "GET",
		url : "/SmartMirrorWebProject/calendar",
		dataType : "text",
		error : function() {
			alert('error');
		},
		success : function(data) {
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
			$('#content').html(data);
		}
	});
}

function showBoxOffice() {
	$.ajax({
		type : "GET",
		url : "/SmartMirrorWebProject/movie",
		error : function() {
			alert('error');
		},
		success : function(data) {
			$('#content').html(data);
		}
	});
}

function snapshot() {
	$.ajax({
		type : "GET",
		url : "/SmartMirrorWebProject/snapshot",
		error : function() {
			alert('error');
		},
		success : function(data) {
			var modal = document.getElementById('myModal');
			$("#snapshot").attr("src", data.filepath);
			setTimeout(showModal, 1000);

			setTimeout(closeModal, 3000);
		}
	});
}

function showModal() {
	modal.style.display = "block";
}

function closeModal() {
	modal.style.display = "none";
}

function close() {
	$('#content').empty();
}