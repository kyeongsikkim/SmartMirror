var startCommand;

$(function() {
	annyang.addCallback("start", function(){
		console.log("start");
		animationIcon();
	});
	annyang.addCallback("error", function() {
		//console.log("error");
		noAnimationIcon();
	});
	annyang.addCallback("end", function(){
		//console.log("end");
		noAnimationIcon();
	});
	annyang.addCallback("soundstart", function(){
		//console.log("soundstart");
	});
	annyang.addCallback("result", function(data){
		//console.log("result");
		var command = data[0].replace( / /gi ,"");
		if(command == "아리아" || command == "아니야") {
			//console.log("미러");
			speakText("네 말씀하세요");
			startCommand = true;
			$("#help").html("");
		} else {
			if(startCommand == true) {
				$("#speech").html(command);
				handleCommand(command);
				if(command == "중지" || command == "형광등" || command == "취침등" || command == "불켜") {
					startCommand = false;
					$("#help").html("\"아리아\"를 불러보세요.");
				}
			}
		}
	});
	annyang.addCallback("resultMatch", function(){
		//console.log("resultMatch");
	});
	annyang.addCallback("resultNoMatch", function(){
		//console.log("resultNoMatch");
		restart();
	});
	annyang.addCallback("errorNetwork", function(){
		//console.log("errorNetwork");
	});
	annyang.addCallback("errorPermissionBlocked", function(){
		//console.log("errorPermissionBlocked");
	});
	annyang.addCallback("errorPermissionDenied", function(){
		//console.log("errorPermissionDenied");
	});
	
	annyang.start({autoRestart: true , continuous: false});
});

function restart() {
	annyang.abort();
	annyang.start({autoRestart: true , continuous: false});
}

var icon;
var iconIntervalId;

function animationIcon() {
	icon = document.getElementById('recording');
	icon.src = "/SmartMirrorWebProject/resources/images/microphone.png";
	
	if(iconIntervalId != null) {
		clearInterval(iconIntervalId);
	}
	
	iconIntervalId = setInterval(function() {
		$('#recording').animate( {opacity: 0} , 750).animate( {opacity: 1} , 750);
	}, 1800);
}

function noAnimationIcon() {
	if(iconIntervalId != null) {
		$('#recording').stop(true, true);
		clearInterval(iconIntervalId);
	}
	
	icon = document.getElementById('recording');
	icon.src = "/SmartMirrorWebProject/resources/images/microphonex.png";
}
