var audio;
var musiclist = [];
var musiccount = 0;
var url = "/SmartMirrorWebProject/resources/media/";

function setAudio() {
	audio = document.getElementById('audio');
	musiclist.push("music.mp3");
	musiclist.push("RedVelvet_RussianRoulette.mp3");
	musiclist.push("RedVelvet_빨간맛.mp3");
}

function play() {
	audio.src = url + musiclist[musiccount];
	audio.play();
}

function next() {
	audio.pause();
	musiccount++;
	audio.src = url + musiclist[musiccount];
	audio.play();
}
function pause() {
	audio.pause();
}