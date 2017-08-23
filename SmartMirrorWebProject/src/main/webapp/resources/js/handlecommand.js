var mapflag = false;
var calendarflag = false;
var cameraflag = false;
var subwayflag = false;
var videoflag = false;
var weatherflag = false;
var audioflag = false;

var pauseflag = false;

function handleCommand(command) {
	var script = command.replace( / /gi ,"");

	if(command == "중지") {
		speakText("종료합니다");
		close();
		
		mapflag = false;
		calendarflag = false;
		cameraflag = false;
		subwayflag = false;
		videoflag = false;
		weatherflag = false;
		audioflag = false;
		pauseflag = false;
	}
	
	if(mapflag) {
		if(command == "크게") {
			zoomIn();
		} else if(command == "작게" || command == "잘게" || command == "자게") {
			zoomOut();
		} else {
			setMap(command);
		}
	}
	
	if(calendarflag) {
		if(command == "다음달") {
			nextCalendar();
		} else if(command == "이전달") {
			prevCalendar();
		} else if(command == "이번달") {
			specificCalendar(new Date().getMonth()+1);
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
	
	if(cameraflag) {
		if(command == "사진") {
			speakText("3초 뒤에 촬영합니다");
			setTimeout(snapshot, 2500);
		}
	}

	if(subwayflag) {
		if(command=="1" || command=="1호선"){
			changeLine(1);
		}else if(command=="2" || command=="2호선"){
			changeLine(2);
		}else if(command=="3" || command=="3호선"){
			changeLine(3);
		}else if(command=="4" || command=="4호선"){
			changeLine(4);
		}else if(command=="5" || command=="5호선"){
			changeLine(5);
		}else if(command=="6" || command=="6호선"){
			changeLine(6);
		}else if(command=="7" || command=="7호선"){
			changeLine(7);
		}else if(command=="8" || command=="8호선"){
			changeLine(8);
		}else if(command=="9" || command=="9호선"){
			changeLine(9);
		}else if(command=="공항철도" || command=="공항철도호선"){
			changeLine("A");
		}else if(command=="분당" || command=="분당선"){
			changeLine("B");
		}else if(command=="에버라인" || command=="에버라인선"){
			changeLine("E");
		}else if(command=="경춘" || command=="경춘선"){
			changeLine("G");
		}else if(command=="인천1" || command=="인천1선"){
			changeLine("I");
		}else if(command=="인천2" || command=="인천2선"){
			changeLine("I2");
		}else if(command=="경의중앙" || command=="경의중앙선"){
			changeLine("K");
		}else if(command=="경강" || command=="경강선"){
			changeLine("KK");
		}else if(command=="신분당" || command=="신분당선"){
			changeLine("S");
		}else if(command=="수인" || command=="수인선"){
			changeLine("SU");
		}else if(command=="의정부" || command=="의정부선"){
			changeLine("U");
		}else{
			changeStation(command);
		}
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
	
	if(audioflag) {
		if(command == "리스트") {
			openList();
		} else if(command == "다음페이지") {
			nextList();
		} else if(command == "이전페이지") {
			prevList();
		} else if(command == "재생") {
			if(pauseflag == false) {
				play(1);
			} else {
				resume();
				pauseflag = false;
			}
		} else if(command == "다음곡" || command == "다음") {
			nextPlay();
			pauseflag = false;
		} else if(command == "이전곡" || command == "이전") {
			prevPlay();
			pauseflag = false;
		} else if(command.search("번") > -1) {
			number = command.replace("번","");
			play(number);
			pauseflag = false;
		} else if(command == "일시정지") {
			pause();
			pauseflag = true;
		}
	}
	
	if(!mapflag && !calendarflag && !cameraflag && !subwayflag && !videoflag && !weatherflag && !audioflag) {
		if(command == "명령어" || command == "명명어") {
			speakText("명령어 목록을 보여드릴게요");
			openCommand();
		} else if(command == "지도") {
			speakText("지도를 보여드릴게요");
			openMap();
			mapflag = true;
		} else if(command == "달력") {
			speakText("달력을 보여드릴게요");
			openCalendar();
			calendarflag = true;
		} else if(command == "카메라") {
			$("#content").empty(); 
			speakText("카메라를 보여드릴게요");
			openCamera();
			cameraflag = true;
		} else if(command == "지하철") {
			speakText("원하시는 역을 말해주세요");
			openSubway();
			subwayflag = true;
		} else if(script.search("유튜브") > -1) {
			var youtubeInfo = script.replace("유튜브", "");
			speakText("유투브를 실행할게요");
			// openYoutubeList("자바");
			openVideo();
			playVideo(youtubeInfo);

			// videoflag = true;
		} else if(command == "날씨") {
			openWeather();
			weatherSearch("송파구");
			speakText("원하시는 지역을 말씀해주세요");
			weatherflag = true;
		} else if(command == "음악") {
			speakText("엠피쓰리를 실행할게요");
			openAudio();
			getMusicList();
			audioflag = true;
		} else if(command == "형광등") {
			speakText("형광등을 켜드릴께요");
			lightOn();
		} else if(command == "취침등") {
			speakText("취침등을 켜드릴께요");
			sleepLightOn();
		} else if(command == "불꺼") {
			speakText("불을 꺼드릴게요");
			sleepLightOff();
		} else if(command == "선풍기켜") {
			speakText("선풍기를 켜드릴게요");
			fanOn();
		} else if(command == "선풍기꺼") {
			speakText("선풍기를 꺼드릴게요");
			fanOff();
		} else if(command == "창문열어") {
			speakText("창문을 열어드릴게요");
			windowOpen();
		} else if(command == "창문닫아") {
			speakText("창문을 닫아드릴게요");
			windowClose();
		}
	}
}