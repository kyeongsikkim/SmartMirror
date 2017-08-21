//var playParameter;
var youtubeListId = [];

// Search
function youtubeSearch(command) {
	playParameter = command;
	$.ajax({
		url: "https://www.googleapis.com/youtube/v3/search?part=snippet&order=videoCount&maxResults=5&q="+command+"&type=video&videoCaption=closedCaption&key=AIzaSyDSBgGx_mh_ZzOA14ftGFo2yEEzjBEMQiM",
		success: function(data) {
			youtubeListId[1] = data.items[0].id.videoId;
			youtubeListId[2] = data.items[1].id.videoId;
			youtubeListId[3] = data.items[2].id.videoId;
			youtubeListId[4] = data.items[3].id.videoId;
			youtubeListId[5] = data.items[4].id.videoId;
			document.getElementById("video1").src = '//www.youtube.com/embed/'+data.items[0].id.videoId+'?rel=0&vq=small&autoplay=0';
			$('#title1').html(data.items[0].snippet.title);
			document.getElementById("video2").src = '//www.youtube.com/embed/'+data.items[1].id.videoId+'?rel=0&vq=small&autoplay=0';
			$('#title2').html(data.items[1].snippet.title);
			document.getElementById("video3").src = '//www.youtube.com/embed/'+data.items[2].id.videoId+'?rel=0&vq=small&autoplay=0';
			$('#title3').html(data.items[2].snippet.title);
			document.getElementById("video4").src = '//www.youtube.com/embed/'+data.items[3].id.videoId+'?rel=0&vq=small&autoplay=0';
			$('#title4').html(data.items[3].snippet.title);
			document.getElementById("video5").src = '//www.youtube.com/embed/'+data.items[4].id.videoId+'?rel=0&vq=small&autoplay=0';
			$('#title5').html(data.items[4].snippet.title);
		}
	});
}

//Play
function playVideo(number) {
	console.log(youtubeListId);
//	$.ajax({
//		url:"https://www.googleapis.com/youtube/v3/search?part=snippet&q="+playParameter+"&type=video&videoCaption=closedCaption&key=AIzaSyDSBgGx_mh_ZzOA14ftGFo2yEEzjBEMQiM",
//		success: function(data) {
//			console.log(data.items[number].id.videoId);
//			$('#video').attr('src','//www.youtube.com/embed/'+data.items[number].id.videoId+'?autoplay=1');
	document.getElementById("video").src = '//www.youtube.com/embed/'+youtubeListId[number]+'?rel=0&vq=small&autoplay=1';
//		}
//	});
}