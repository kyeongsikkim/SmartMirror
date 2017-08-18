$(function() {
	var ws = new WebSocket("ws://" + location.host + "/SmartMirrorWebProject/websocket/pirsensor");
	ws.onmessage = function(event) {
		var data = JSON.parse(event.data);
		var pir=data.pirValue;
		console.log(pir);
		if(pir==1){
			//$("#pirtest").html("here");
		}else{
			//$("#pirtest").html("no");
		}
	};
});






