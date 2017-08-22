var audio;
var time;

$(function(){
	setInterval(function() {
		var now = new Date().toTimeString();
		if (now.search("23:59:59") > -1) {
			audio = new Audio('/SmartMirrorWebProject/resources/media/계란이 왔어요.mp3');
			audio.play();
		}
	}, 1000);
});

function alarmStop() {
	audio.pause();
	closeSpeech("알람");
}