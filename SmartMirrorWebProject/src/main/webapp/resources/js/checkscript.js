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
	} else if(script.search("알람끄기") > -1) {
		alarmStop();
		annyangReset();
	} else if(script.search("유튜브") > -1) {
		var youtubeInfo = script.replace("유튜브", "");
		if(youtubeInfo=="끄기") {
			close();
			closeSpeech("유튜브");
		} else {
			openYoutube();
			defineRequest(youtubeInfo);
		}
	}
}

function openSpeech(message) {
	annyang.pause();
	var text = message + " 정보입니다.";
	speakText(text);
	annyang.resume();
}

function openYoutube(message) {
	annyanh.pause();
	var text = message + " 영상입니다.";
	speakText(text);
	annyang.resume();
}

function closeSpeech(message) {
	annyang.pause();
	var text = message + "를 종료합니다.";
	speakText(text);
	annyang.resume();
	$('#speech').html("");
}

function annyangReset() {
	annyang.pause();
	annyang.resume();
}