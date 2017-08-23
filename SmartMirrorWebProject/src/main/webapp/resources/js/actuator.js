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

function fanOn() {
	var json = {
		"command" : "change",
		"direction" : "forward",
		"speed" : "3000"
	};
	$.ajax({
		url : "/SmartMirrorWebProject/fan",
		data : json,
		method : "post"
	});
}

function fanOff() {
	var json = {
		"command" : "change",
		"direction" : "forward",
		"speed" : "0"
	};
	$.ajax({
		url : "/SmartMirrorWebProject/fan",
		data : json,
		method : "post"
	});
}

function windowOpen() {
	var json = {
		"command" : "change",
		"leftright" : "10",
		"updown" : "10"
	};
	$.ajax({
		url : "/SmartMirrorWebProject/window",
		data : json,
		method : "post"
	});
}

function windowClose() {
	var json = {
		"command" : "change",
		"leftright" : "170",
		"updown" : "10"
	};
	$.ajax({
		url : "/SmartMirrorWebProject/window",
		data : json,
		method : "post"
	});
}
