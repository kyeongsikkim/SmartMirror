var audio;
var musicList;

var totalMusicNo;
var currPage;
var maxPage;

var currNum;

function getMusicList() {
	$.ajax({
		type : "GET",
		url : "/SmartMirrorWebProject/musiclist",
		error : function() {
			alert('error');
		},
		success : function(data) {
			if(musicList != null) {
				musicList = null;
			}
			
			musicList = data.musicList;
			totalMusicNo = musicList.length;
			currPage = 0;
			maxPage = parseInt(totalMusicNo/10);
			currNum = 1;
		}
	});
}

function openList() {
	document.getElementById('musiclist').innerHtml("");
	if(currPage == maxPage) {
		for(i=(10*currPage); i<totalMusicNo; i++) {
			document.getElementById('musiclist').append( (musicList[i].mno + 1) + " " + musicList[i].mfilename + "</br>");
		}
	} else {
		for(i=(10*currPage); i<(10*(currPage+1)); i++) {
			document.getElementById('musiclist').append( (musicList[i].mno + 1) + " " + musicList[i].mfilename + "</br>");
		}
	}
}

function nextList() {
	document.getElementById('musiclist').innerHtml("");
	if(currPage < maxPage) {
		currPage++;
		if(currPage == maxPage) {
			for(i=(10*currPage); i<totalMusicNo; i++) {
				document.getElementById('musiclist').append( (musicList[i].mno + 1) + " " + musicList[i].mfilename + "</br>");
			}
		} else {
			for(i=(10*currPage); i<(10*(currPage+1)); i++) {
				document.getElementById('musiclist').append( (musicList[i].mno + 1) + " " + musicList[i].mfilename + "</br>");
			}
		}
	} else {
		console.log("마지막 페이지입니다");
	}
}

function prevList() {
	document.getElementById('musiclist').innerHtml("");
	if(currPage > 0) {
		currPage--;
		if(currPage == maxPage) {
			for(i=(10*currPage); i<totalMusicNo; i++) {
				document.getElementById('musiclist').append( (musicList[i].mno + 1) + " " + musicList[i].mfilename + "</br>");
			}
		} else {
			for(i=(10*currPage); i<(10*(currPage+1)); i++) {
				document.getElementById('musiclist').append( (musicList[i].mno + 1) + " " + musicList[i].mfilename + "</br>");
			}
		}
	} else {
		console.log("첫 페이지입니다");
	}
}

function play(number) {
	currNum = number;
	filename = musicList[currNum-1].mfilename;
	
	audio = document.getElementById("audio");
	audio.src = "/SmartMirrorWebProject/resources/music/" + filename;
	
	audio.play();
}

function nextPlay() {
	if(currNum < totalMusicNo) {
		currNum++;
		filename = musicList[currNum-1].mfilename;
		
		audio = document.getElementById("audio");
		audio.src = "/SmartMirrorWebProject/resources/music/" + filename;
		
		audio.play();
	}
}

function prevPlay() {
	if(currNum > 1) {
		currNum--;
		filename = musicList[currNum-1].mfilename;
		
		audio = document.getElementById("audio");
		audio.src = "/SmartMirrorWebProject/resources/music/" + filename;
		
		audio.play();
	}
}

function resume() {
	audio.play();
}

function pause() {
	audio.pause();
}