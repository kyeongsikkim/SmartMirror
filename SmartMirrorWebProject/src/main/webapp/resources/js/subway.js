var currStation;
function changeStation(station){
	console.log(station);
		currStation=station;
		var params;
	    params={station:currStation};
		$.ajax({
			url:"/SmartMirrorWebProject/subwaySearch",
			data:params,
			success:function(result){
				$("#content").html(result);
			}
		})
	}
function changeLine(line){
	console.log(currStation);
		console.log(line);
		var params;
		params={station:currStation,line:line};
		$.ajax({
			url:"/SmartMirrorWebProject/subwaySearch",
			data:params,
			success:function(result){
				$("#content").html(result);
			}
		})
	}