var intervalId;
function requestNews() {
	if(intervalId != null) {
		clearInterval(intervalId);
	}
	$.ajax({
		type : "GET",
		url : "/SmartMirrorWebProject/news",
		success : function(data) {
			var list = data.titleList;
			var i = 0;
			$("#rssfeed").html(list[i].title);
			intervalId = setInterval(function(){
				var target = document.querySelector('#rssfeed');
				var player = target.animate([
				  {transform: 'translate(0px,-10px)', opacity:0},
				  {transform: 'translate(0px, 0px)', opacity:1}
				], 500);
				i++;
				$("#rssfeed").html(list[i].title);
				if(i == list.length-1) {
					i = 0;
				}
			}, 3000);
		}
	});
}