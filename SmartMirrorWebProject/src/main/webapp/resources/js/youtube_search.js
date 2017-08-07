var playParameter;

// Search
function youtubeSearch(command) {
	playParameter = command;
	$.ajax({
		url: "https://www.googleapis.com/youtube/v3/search?part=snippet&q="+command+"&type=video&videoCaption=closedCaption&key=AIzaSyDSBgGx_mh_ZzOA14ftGFo2yEEzjBEMQiM",
		success: function(data) {
			youtubeList = data;
			$('#video1').attr('src','//www.youtube.com/embed/'+data.items[0].id.videoId+'?autoplay=0');
			$('#title1').html(data.items[0].snippet.title);
			$('#video2').attr('src','//www.youtube.com/embed/'+data.items[1].id.videoId+'?autoplay=0');
			$('#title2').html(data.items[1].snippet.title);
			$('#video3').attr('src','//www.youtube.com/embed/'+data.items[2].id.videoId+'?autoplay=0');
			$('#title3').html(data.items[2].snippet.title);
			$('#video4').attr('src','//www.youtube.com/embed/'+data.items[3].id.videoId+'?autoplay=0');
			$('#title4').html(data.items[3].snippet.title);
			$('#video5').attr('src','//www.youtube.com/embed/'+data.items[4].id.videoId+'?autoplay=0');
			$('#title5').html(data.items[4].snippet.title);
		}
	});
}

//Play
function playVideo(number) {
	$.ajax({
		url:"https://www.googleapis.com/youtube/v3/search?part=snippet&q="+playParameter+"&type=video&videoCaption=closedCaption&key=AIzaSyDSBgGx_mh_ZzOA14ftGFo2yEEzjBEMQiM",
		success: function(data) {
			$('#video').attr('src','//www.youtube.com/embed/'+data.items[number].id.videoId+'?autoplay=1&loop=1');
		}
	});
}