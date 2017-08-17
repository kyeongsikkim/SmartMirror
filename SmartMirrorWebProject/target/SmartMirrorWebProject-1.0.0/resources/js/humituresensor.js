$(function () {
	var ws = new WebSocket("ws://" + location.host + "/SmartMirrorWebProject/websocket/humituresensor");
	ws.onmessage = function(event) {
		var data = JSON.parse(event.data);
		console.log(data);
		var temperature=data.temperature;
		console.log(temperature);
		var humid=data.humid;
		$("#innerTemperature").html(temperature + "℃");
		$("#innerHumid").html(humid+"%");
	};
});