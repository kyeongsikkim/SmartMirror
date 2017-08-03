function checkScript(message) {
	//remove blank
	script = message.replace( / /gi ,"");
	
	$("#help").html("");
	
	//supportable command check
	if(script.search("사용가능한명령어") > -1) {
		annyang.pause();
		openCommand();
		speakText("사용 가능한 명령어입니다");
		annyang.resume();
	}
	//map command check
	else if(script.search("지도") > -1) {
		var mapCommand = script.replace("지도","");
		if(mapCommand == "끄기") {
			close();
			closeSpeech("지도");
		} else if(mapCommand == "켜기" || mapCommand == "") {
			openMap();
			openSpeech("지도");
		} else if(mapCommand == "확대") {
			zoomIn();
			annyangReset();
		} else if(mapCommand == "축소") {
			zoomOut();
			annyangReset();
		} else if(mapCommand == "리셋") {
			zoomReset();
			annyangReset();
		} else {
			//openMap();
			//setTimeout(function(){ setMap(mapCommand); }, 2000);
			setMap(mapCommand);
			annyangReset();
		}	
	}
	//calendar command check
	else if(script.search("달력") > -1) {
		var calendarCommand = script.replace("달력","");
		if(calendarCommand == "끄기") {
			close();
			closeSpeech("달력");
		} else if(calendarCommand == "켜기" || calendarCommand == "") {
			openCalendar();
			openSpeech("달력");
		} else if(calendarCommand == "다음달") {
			nextCalendar();
			annyangReset();
		} else if(calendarCommand == "전달") {
			prevCalendar();
			annyangReset();
		} else if(calendarCommand.search("월") > -1) {
			specificCalendar(calendarCommand.replace("월",""));
			annyangReset();
		}
	}
	//camera command check
	else if(script.search("카메라") > -1) {
		var cameraCommand = script.replace("카메라","");
		console.log(cameraCommand);
		 if(cameraCommand == "끄기") {
			 close();
			 closeSpeech("카메라");
		 } else if(cameraCommand == "켜기" || cameraCommand == "") {
			 openCamera();
			 openSpeech("카메라");
		 } else if(cameraCommand == "촬영") {
			 snapshot();
		 } else {
			 annyangReset();
		 }
	}
	//movie command check
	else if(script.search("영화") > -1) {
		var movieCommand = script.replace("영화","");
		if(movieCommand == "정보") {
			openBoxOffice();
			openSpeech("영화");
		} else if(movieCommand == "정보끄기") {
			close();
			closeSpeech("영화정보");
		}
	}
	//alarm command check
	else if(script.search("알람") > -1) {
		var alarmCommand = script.replace("알람","");
		if(alarmCommand == "끄기") {
			alarmStop();
			annyangReset();
		}
	}
	//youtube command check
	else if(script.search("동영상") > -1) {
		var youtubeCommand = script.replace("동영상", "");
		if(youtubeCommand =="끄기") {
			close();
			closeSpeech("동영상");
		} else if(youtubeCommand == "켜기") {
			annyangReset();
			openYoutube();
			defineRequest("");
		} else {
			annyangReset();
			openYoutube();
			defineRequest(youtubeCommand);
		}
	}
	//close check
	else if(script.search("끄기") > -1) {
		annyang.pause();
		var text = "종료합니다.";
		speakText(text);
		annyang.resume();
		
		$('#speech').html("");
	}
}
//speakText when open content
function openSpeech(message) {
	annyang.pause();
	var text = message + " 정보입니다.";
	speakText(text);
	annyang.resume();
}
//speakText when close content
function closeSpeech(message) {
	annyang.pause();
	var text = message + "를 종료합니다.";
	speakText(text);
	annyang.resume();
	
	$('#speech').html("");
}
//annyang stabilization
function annyangReset() {
	annyang.pause();
	annyang.resume();
}