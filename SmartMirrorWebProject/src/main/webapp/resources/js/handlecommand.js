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
	} else if(command == "동영상") {
//		speakText("어떤 동영상을 보고 싶으세요?");
		console.log("동영상");
		speakText("잠시만 기다려 주세요");
		openYoutubeList();
		defineRequest(command);
	} else if(command == "재생") {
//		var videoPlayInfo = command.replace("재생", "");
		console.log("재생");
		openVideo();
		playVideo(1);
//		var number = -1;
//		if(videoPlayInfo == "1번") {
//			number = 0;
//			openVideo();
//			playVideo(number);
//		} else if(videoPlayInfo == "2번") {
//			number = 1;
//			openVideo();
//			playVideo(number);
//		} else if(videoPlayInfo == "3번") {
//			number = 2;
//			openVideo();
//			playVideo(number);
//		} else if(videoPlayInfo == "4번") {
//			number = 3;
//			openVideo();
//			playVideo(number);
//		} else {
//			number = 4;
//			openVideo();
//			playVideo(number);
//		}
	} else if(command == "송파구 날씨") {
		console.log("날씨");
		speakText(command + "입니다");
		openWeather();
		weatherSearch("송파구");
	} else if(command == "중지") {
		console.log("중지");
		speakText("종료합니다");
		close();
	}
}