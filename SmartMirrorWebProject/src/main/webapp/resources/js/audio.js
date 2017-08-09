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
	$("#musiclist").html("");
	if(currPage == maxPage) {
		for(i=(10*currPage); i<totalMusicNo; i++) {
			$("#musiclist").append((musicList[i].mno) + " " + musicList[i].mfilename + "</br>");
		}
	} else {
		for(i=(10*currPage); i<(10*(currPage+1)); i++) {
			$("#musiclist").append((musicList[i].mno) + " " + musicList[i].mfilename + "</br>");
		}
	}
}

function nextList() {
	$("#musiclist").html("");
	if(currPage < maxPage) {
		currPage++;
		if(currPage == maxPage) {
			for(i=(10*currPage); i<totalMusicNo; i++) {
				$("#musiclist").append((musicList[i].mno) + " " + musicList[i].mfilename + "</br>");
			}
		} else {
			for(i=(10*currPage); i<(10*(currPage+1)); i++) {
				$("#musiclist").append((musicList[i].mno) + " " + musicList[i].mfilename + "</br>");
			}
		}
	} else {
		console.log("마지막 페이지입니다");
	}
}

function prevList() {
	$("#musiclist").html("");
	if(currPage > 0) {
		currPage--;
		if(currPage == maxPage) {
			for(i=(10*currPage); i<totalMusicNo; i++) {
				$("#musiclist").append((musicList[i].mno) + " " + musicList[i].mfilename + "</br>");
			}
		} else {
			for(i=(10*currPage); i<(10*(currPage+1)); i++) {
				$("#musiclist").append((musicList[i].mno) + " " + musicList[i].mfilename + "</br>");
			}
		}
	} else {
		console.log("첫 페이지입니다");
	}
}

function play(number) {
	currNum = number;
	filepath = musicList[currNum-1].mfilepath;
	
	audio = document.getElementById("audio");
	audio.src = filepath;
	
	audio.play();
}

function nextPlay() {
	if(currNum < totalMusicNo) {
		currNum++;
		filepath = musicList[currNum-1].mfilepath;
		
		audio = document.getElementById("audio");
		audio.src = filepath;
		
		audio.play();
	}
}

function prevPlay() {
	if(currNum > 1) {
		currNum--;
		filepath = musicList[currNum-1].mfilepath;
		
		audio = document.getElementById("audio");
		audio.src = filepath;
		
		audio.play();
	}
}

function resume() {
	audio.play();
}

function pause() {
	audio.pause();
}