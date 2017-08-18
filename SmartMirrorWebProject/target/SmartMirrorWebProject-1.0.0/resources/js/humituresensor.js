$(function () {
	var ws = new WebSocket("ws://" + location.host + "/SmartMirrorWebProject/websocket/humituresensor");
	ws.onmessage = function(event) {
		var data = JSON.parse(event.data);
		
		var temperature=data.temperature;
		var humid=data.humid;
		
		console.log("온도" + temperature);
		console.log("습도" + humid);
		
		$("#temp").html(temperature + "℃");
		$("#humidity").html(humid+ "%");
	};
});