//var playParameter;
//
//// Search
//function youtubeSearch(command) {
//	playParameter = command;
//	$.ajax({
//		url: "https://www.googleapis.com/youtube/v3/search?part=snippet&order=videoCount&maxResults=3&q="+command+"&type=video&videoCaption=closedCaption&key=AIzaSyDSBgGx_mh_ZzOA14ftGFo2yEEzjBEMQiM",
//		success: function(data) {
//			document.getElementById("video1").src = '//www.youtube.com/embed/'+data.items[0].id.videoId+'?rel=0&vq=small&autoplay=0';
//			$('#title1').html(data.items[0].snippet.title);
//			document.getElementById("video2").src = '//www.youtube.com/embed/'+data.items[1].id.videoId+'?rel=0&vq=small&autoplay=0';
//			$('#title2').html(data.items[1].snippet.title);
//			document.getElementById("video3").src = '//www.youtube.com/embed/'+data.items[2].id.videoId+'?rel=0&vq=small&autoplay=0';
//			$('#title3').html(data.items[2].snippet.title);
//		}
//	});
//}
//
////Play
//function playVideo(youtubeInfo) {
//	$.ajax({
//		url: "https://www.googleapis.com/youtube/v3/search?part=snippet&order=videoCount&maxResults=3&q="+youtubeInfo+"&type=video&videoCaption=closedCaption&key=AIzaSyDSBgGx_mh_ZzOA14ftGFo2yEEzjBEMQiM",
//		success: function(data) {
//			document.getElementById("video").src = '//www.youtube.com/embed/'+data.items[0].id.videoId+'?rel=0&vq=light&autoplay=1';
//		}
//	});
//}