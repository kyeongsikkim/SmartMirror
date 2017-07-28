var audio;

$(function(){
	setInterval(function() {
		var now = new Date().toTimeString();
		if (now.search("16:12") > -1) {
			audio = new Audio(
					'<%=application.getContextPath()%>/resources/media/music.mp3');
			audio.play();
		}
	}, 60000);
});

function alarmStop() {
	audio.pause();
}