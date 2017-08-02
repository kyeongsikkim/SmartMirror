var audio;

$(function(){
	setInterval(function() {
		var now = new Date().toTimeString();
		if (now.search("16:27:00") > -1) {
			audio = new Audio('/SmartMirrorWebProjectTest/resources/media/music.mp3');
			audio.play();
		}
	}, 1000);
});

function alarmStop() {
	audio.pause();
	closeSpeech("알람");
}