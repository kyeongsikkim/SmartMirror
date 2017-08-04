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