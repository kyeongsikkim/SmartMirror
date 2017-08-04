var startCommand;

$(function() {
	annyang.addCallback("start", function(){
		console.log("start");
	});
	annyang.addCallback("error", function() {
		//console.log("error");
	});
	annyang.addCallback("end", function(){
		//console.log("end");
	});
	annyang.addCallback("soundstart", function(){
		//console.log("soundstart");
	});
	annyang.addCallback("result", function(data){
		//console.log("result");
		var command = data[0];
		if(command == "아리아") {
			//console.log("미러");
			speakText("네 말씀하세요");
			startCommand = true;
		} else {
			if(startCommand == true) {
				//console.log(command);
				startCommand = false;
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
	
	annyang.start({autoRestart: true , continuous: true});
});

function restart() {
	annyang.abort();
	annyang.start({autoRestart: true , continuous: true});
}

function handleCommand(command) {
	if(command == "명령어") {
		console.log("명령어");
		speakText("명령어 목록을 보여드릴게요");
		openCommand();
	} else if(command == "지도") {
		console.log("지도");
		speakText("지도를 보여드릴게요");
		openMap();
	} else if(command == "달력") {
		console.log("달력");
		speakText("달력을 보여드릴게요");
		openCalendar();
	} else if(command == "카메라") {
		console.log("카메라");
		speakText("카메라를 보여드릴게요");
		openCamera();
	} else if(command == "지하철") {
		console.log("지하철");
		speakText("지하철 노선도를 보여드릴게요");
	} else if(command == "중지") {
		console.log("중지");
		speakText("종료합니다");
		close();
	}
}