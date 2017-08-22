$(function() {
	var container = document.getElementById('mainContainer');
	container.style.display = 'none';
	var count = 0;
	var ws = new WebSocket("ws://" + location.host + "/SmartMirrorWebProject/websocket/pirsensor");
	ws.onmessage = function(event) {
		var data = JSON.parse(event.data);
		var pir=data.pirValue;
		
		if(pir==1){
			if(container.style.display == 'none') {
				container.style.display = 'block';
			}
		}else{
			count++;
			if(count == 5) {
				if(container.style.display == 'block') {
					container.style.display = 'none';
				}
				count = 0;
			}
		}
	};
});






