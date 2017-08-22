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
		success : function(data) {
			if(musicList != null) {
				musicList = null;
			}
			
			musicList = data.musicList;
			totalMusicNo = musicList.length;
			currPage = 0;
			maxPage = parseInt(totalMusicNo/10);
			currNum = 1;
			
			openList();
			
			audio = document.getElementById("audio");
			audio.volume = 0.7;
			audio.onended = function() {
				nextPlay();
			}
		}
	});
}

function openList() {
	$("#musiclist").html("");
	$("#leftarrow").html("");
	$("#rightarrow").html("");
	$("#equalizer").html("");
	if(currPage == maxPage) {
		for(i=(10*currPage); i<totalMusicNo; i++) {
			$("#musiclist").append((musicList[i].mno) + ". " + musicList[i].mfilename + "<br/><br/>");
		}
	} else {
		for(i=(10*currPage); i<(10*(currPage+1)); i++) {
			$("#musiclist").append((musicList[i].mno) + ". " + musicList[i].mfilename + "<br/><br/>");
			$("#rightarrow").html("》");
		}
	}
}

function nextList() {
	$("#musiclist").html("");
	$("#leftarrow").html("");
	$("#rightarrow").html("");
	if(currPage < maxPage) {
		currPage++;
		if(currPage == maxPage) {
			for(i=(10*currPage); i<totalMusicNo; i++) {
				$("#musiclist").append((musicList[i].mno) + ". " + musicList[i].mfilename + "<br/><br/>");
				$("#leftarrow").html("《");
			}
		} else {
			for(i=(10*currPage); i<(10*(currPage+1)); i++) {
				$("#musiclist").append((musicList[i].mno) + ". " + musicList[i].mfilename + "<br/><br/>");
				$("#leftarrow").html("《");
				$("#rightarrow").html("》");
			}
		}
	} else {
		console.log("마지막 페이지입니다");
	}
}

function prevList() {
	$("#musiclist").html("");
	$("#leftarrow").html("");
	$("#rightarrow").html("");
	if(currPage > 0) {
		currPage--;
		if(currPage == 0) {
			for(i=(10*currPage); i<(10*(currPage+1)); i++) {
				$("#musiclist").append((musicList[i].mno) + ". " + musicList[i].mfilename + "<br/><br/>");
				$("#rightarrow").html("》");
			}
		} else {
			for(i=(10*currPage); i<(10*(currPage+1)); i++) {
				$("#musiclist").append((musicList[i].mno) + ". " + musicList[i].mfilename + "<br/><br/>");
				$("#leftarrow").html("《");
				$("#rightarrow").html("》");
			}
		}
	} else {
		console.log("첫 페이지입니다");
	}
}

function play(number) {
	$("#musiclist").html("");
	$("#leftarrow").html("");
	$("#rightarrow").html("");
	$("#equalizer").html("<video width=\"100%\" autoplay loop><source src=\"/SmartMirrorWebProject/resources/media/equalizer.mp4\" type=\"video/mp4\"></video>");
	
	currNum = number;
	filepath = musicList[currNum-1].mfilepath;
	
	audio.src = filepath;
	
	audio.play();
}

function nextPlay() {
	$("#musiclist").html("");
	$("#leftarrow").html("");
	$("#rightarrow").html("");
	$("#equalizer").html("<video width=\"100%\" autoplay loop><source src=\"/SmartMirrorWebProject/resources/media/equalizer.mp4\" type=\"video/mp4\"></video>");
	
	if(currNum < totalMusicNo) {
		currNum++;
		filepath = musicList[currNum-1].mfilepath;
		
		audio.src = filepath;
		
		audio.play();
	}
}

function prevPlay() {
	$("#musiclist").html("");
	$("#leftarrow").html("");
	$("#rightarrow").html("");
	$("#equalizer").html("<video width=\"100%\" autoplay loop><source src=\"/SmartMirrorWebProject/resources/media/equalizer.mp4\" type=\"video/mp4\"></video>");
	
	if(currNum > 1) {
		currNum--;
		filepath = musicList[currNum-1].mfilepath;
		
		audio.src = filepath;
		
		audio.play();
	}
}

function resume() {
	audio.play();
}

function pause() {
	$("#musiclist").html("");
	$("#leftarrow").html("");
	$("#rightarrow").html("");
	
	audio.pause();
}