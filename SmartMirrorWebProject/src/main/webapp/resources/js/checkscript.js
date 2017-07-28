function checkScript(message) {
	
	script = message.replace( / /gi ,"");
	
	//map command check
	if(script.search("지도") > -1) {
		var mapInfo = script.replace("지도","");
		if(mapInfo == "끄기") {
			close();
			closeSpeech("지도");
		} else if(mapInfo == "" || mapInfo == null) {
			openMap();
			openSpeech("지도");
		} else if(mapInfo == "확대") {
			zoomIn();
			annyangReset();
		} else if(mapInfo == "축소") {
			zoomOut();
			annyangReset();
		} else if(mapInfo == "리셋") {
			zoomReset();
			annyangReset();
		} else {
			setMap(mapInfo);
			annyangReset();
		}	
	} else if(script.search("카메라") > -1) {
		var cameraInfo = script.replace("카메라","");
		console.log(cameraInfo);
		 if(cameraInfo == "끄기") {
			 close();
			 closeSpeech("카메라");
		 } else if(cameraInfo == "" || cameraInfo == null) {
			 openCamera();
			 openSpeech("카메라");
		 }
	}
}

function openSpeech(message) {
	annyang.pause();
	var text = message + " 정보입니다.";
	speakText(text);
	annyang.resume();
}

function closeSpeech(message) {
	annyang.pause();
	var text = message + "를 종료합니다.";
	speakText(text);
	annyang.resume();
}

function errorSpeech(message) {
	annyang.pause();
	var text = message + "는 잘못된 명령어입니다.";
	speakText(text);
	annyang.resume();
}

function annyangReset() {
	annyang.pause();
	annyang.resume();
}