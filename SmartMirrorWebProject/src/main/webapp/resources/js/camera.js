var modal;

function snapshot() {
	$.ajax({
		type : "GET",
		url : "/SmartMirrorWebProject/snapshot",
		error : function() {
			alert('error');
		},
		success : function(data) {
			filename = data.filename;
			filepath = "/SmartMirrorWebProject/resources/photo/" + filename;
			
			modal = document.getElementById('myModal');
			$("#snapshotmodal").attr("src", filepath);
			setTimeout(modalOpen, 2000);
			
			setTimeout(modalHide, 5000);
		}
	});
}

function modalOpen() {
	modal.style.display = "block";
}

function modalHide() {
	modal.style.display = "none";
}