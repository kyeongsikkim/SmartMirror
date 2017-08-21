<<<<<<< HEAD
=======
var playParameter;
<<<<<<< Updated upstream
=======
>>>>>>> 5e5635d42212c89653e1de1ab0608f4ffb0949a9
>>>>>>> Stashed changes
var youtubeList;

// Search
function youtubeSearch(command) {
	$.ajax({
		url: "https://www.googleapis.com/youtube/v3/search?part=snippet&order=videoCount&maxResults=5&q="+command+"&type=video&videoCaption=closedCaption&key=AIzaSyDSBgGx_mh_ZzOA14ftGFo2yEEzjBEMQiM",
		success: function(data) {
			youtubeList = data;
			console.log(data);
			$('#video1').attr('src','//www.youtube.com/embed/'+data.items[0].id.videoId+'?autoplay=0&vq=medium');
			$('#title1').html(data.items[0].snippet.title);
			$('#video2').attr('src','//www.youtube.com/embed/'+data.items[1].id.videoId+'?autoplay=0&vq=medium');
			$('#title2').html(data.items[1].snippet.title);
			$('#video3').attr('src','//www.youtube.com/embed/'+data.items[2].id.videoId+'?autoplay=0&vq=medium');
			$('#title3').html(data.items[2].snippet.title);
			$('#video4').attr('src','//www.youtube.com/embed/'+data.items[3].id.videoId+'?autoplay=0&vq=medium');
			$('#title4').html(data.items[3].snippet.title);
			$('#video5').attr('src','//www.youtube.com/embed/'+data.items[4].id.videoId+'?autoplay=0&vq=medium');
			$('#title5').html(data.items[4].snippet.title);
		}
	});
}

//Play
function playVideo(number) {
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
	$('#video').attr('src','//www.youtube.com/embed/'+youtubeList.items[number].id.videoId+'?rel=0&vq=small&autoplay=1');
=======
>>>>>>> Stashed changes
//	$.ajax({
//		url:"https://www.googleapis.com/youtube/v3/search?part=snippet&q="+playParameter+"&type=video&videoCaption=closedCaption&key=AIzaSyDSBgGx_mh_ZzOA14ftGFo2yEEzjBEMQiM",
//		success: function(data) {
//			console.log(data.items[number].id.videoId);
//			$('#video').attr('src','//www.youtube.com/embed/'+data.items[number].id.videoId+'?autoplay=1');
	document.getElementById("video").src = '//www.youtube.com/embed/'+youtubeList.items[number].id.videoId+'?autoplay=1';
//		}
//	});
<<<<<<< Updated upstream
=======
>>>>>>> 5e5635d42212c89653e1de1ab0608f4ffb0949a9
>>>>>>> Stashed changes
}