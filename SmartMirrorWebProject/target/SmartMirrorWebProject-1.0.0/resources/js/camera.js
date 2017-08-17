var modal;

function snapshot() {
	$.ajax({
		type : "GET",
		url : "/SmartMirrorWebProject/snapshot",
		error : function() {
			alert('error');
		},
		success : function(data) {
			
			modal = document.getElementById('myModal');
			modal.innerHTML='';
			modal.innerHTML='<img class="modal-content" src="SmartMirrorWebProject/snapshotdisplay?filename=' + data.filename + '" width="640px" height="480px">';
			setTimeout(modalOpen, 2000);
			//modalOpen();
			setTimeout(modalHide, 4000);
		}
	});
}

function modalOpen() {
	modal.style.display = "block";
}

function modalHide() {
	modal.style.display = "none";
}