var startCommand;

$(function() {
	annyang.addCallback("start", function(){
		console.log("start");
		$("#ready").html("ready");
	});
	annyang.addCallback("error", function() {
		//console.log("error");
		$("#ready").html("error");
	});
	annyang.addCallback("end", function(){
		//console.log("end");
	});
	annyang.addCallback("soundstart", function(){
		//console.log("soundstart");
	});
	annyang.addCallback("result", function(data){
		//console.log("result");
		var command = data[0].replace( / /gi ,"");
		if(command == "아리아") {
			//console.log("미러");
			speakText("네 말씀하세요");
			startCommand = true;
			$("#help").html("");
		} else {
			if(startCommand == true) {
				//console.log(command);
				startCommand = false;
				$("#speech").html(command);
				handleCommand(command);
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
