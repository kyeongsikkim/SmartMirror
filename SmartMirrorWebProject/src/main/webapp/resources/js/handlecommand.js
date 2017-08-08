var mapflag = false;
var calendarflag = false;
var subwayflag = false;
var videoflag = false;
var weatherflag = false;

function handleCommand(command) {
	if(command == "중지") {
		console.log("중지");
		speakText("종료합니다");
		close();
		
		mapflag = false;
		calendarflag = false;
		subwayflag = false;
		videoflag = false;
		weatherflag = false;
	}
	
	if(!mapflag && !calendarflag && !subwayflag && !videoflag && !weatherflag) {
		if(command == "명령어") {
			console.log("명령어");
			speakText("명령어 목록을 보여드릴게요");
			openCommand();
		} else if(command == "지도") {
			console.log("지도");
			speakText("지도를 보여드릴게요");
			openMap();
			mapflag = true;
		} else if(command == "달력") {
			console.log("달력");
			speakText("달력을 보여드릴게요");
			openCalendar();
			calendarflag = true;
		} else if(command == "카메라") {
			console.log("카메라");
			speakText("카메라를 보여드릴게요");
			openCamera();
		} else if(command == "지하철") {
			console.log("지하철");
			speakText("지하철 노선도를 보여드릴게요");
			subwayflag = true;
		} else if(command == "유튜브") {
			console.log("유튜브");
			speakText("유투브를 실행합니다");
			openYoutubeList(command);
			videoflag = true;
		} else if(command == "날씨") {
			console.log("날씨");
			speakText("날씨를 보여드릴게요");
			openWeather();
			weatherflag = true;
		}
	}
	
	if(mapflag) {
		if(command == "확대") {
			zoomIn();
		} else if(command == "축소") {
			zoomOut();
		} else {
			setMap(command);
		}
	}
	
	if(calendarflag) {
		console.log(command);
		if(command == "다음달") {
			nextCalendar();
		} else if(command == "전달") {
			prevCalendar();
		} else if(command == "1월") {
			specificCalendar(1);
		} else if(command == "2월") {
			specificCalendar(2);
		} else if(command == "3월") {
			specificCalendar(3);
		} else if(command == "4월") {
			specificCalendar(4);
		} else if(command == "5월") {
			specificCalendar(5);
		} else if(command == "6월") {
			specificCalendar(6);
		} else if(command == "7월") {
			specificCalendar(7);
		} else if(command == "8월") {
			specificCalendar(8);
		} else if(command == "9월") {
			specificCalendar(9);
		} else if(command == "10월") {
			specificCalendar(10);
		} else if(command == "11월") {
			specificCalendar(11);
		} else if(command == "12월") {
			specificCalendar(12);
		}
	}

	if(subwayflag) {
		
	}
	
	if(videoflag) {
		if(command == "1번" || command == "일번") {
			openVideo(0);
		} else if(command == "2번" || command == "이번") {
			openVideo(1);
		} else if(command == "3번" || command == "삼번") {
			openVideo(2);
		} else if(command == "4번" || command == "사번") {
			openVideo(3);
		} else if(command == "5번" || command == "오번") {
			openVideo(4);
		} else {
			openYoutubeList(command);
		}
	}
	
	if(weatherflag) {
		weatherSearch(command);
	}
}