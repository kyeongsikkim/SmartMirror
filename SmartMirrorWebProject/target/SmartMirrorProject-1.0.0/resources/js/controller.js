function openCalander() {
	$.ajax({
	    type : "GET",
	    url : "/SmartMirrorProject/calander",
	    dataType : "text",
	    error : function() {
	      alert('error');
	    },
	    success : function(data) {
	      $('#content').html(data);
	    }
	  });
}

function openMap() {
	$.ajax({
	    type : "GET",
	    url : "/SmartMirrorProject/map",
	    dataType : "text",
	    error : function() {
	      alert('error');
	    },
	    success : function(data) {
	      $('#content').html(data);
	      initMap();
	    }
	  });
}