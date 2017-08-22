function lightOn() {
	var json = {
			"command" : "change",
			"red" : "255",
			"green" : "255",
			"blue" : "0"
		};
	$.ajax({
		url : "/SmartMirrorWebProject/rgbled",
		data : json,
		method : "post"
	});
}

function sleepLightOn() {
	var json = {
			"command" : "change",
			"red" : "255",
			"green" : "0",
			"blue" : "0"
		};
	$.ajax({
		url : "/SmartMirrorWebProject/rgbled",
		data : json,
		method : "post"
	});
}

function sleepLightOff() {
	var json = {
			"command" : "change",
			"red" : "0",
			"green" : "0",
			"blue" : "0"
		};
	$.ajax({
		url : "/SmartMirrorWebProject/rgbled",
		data : json,
		method : "post"
	});
}

