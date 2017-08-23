function camera(command,leftright,updown,flag) {
	var json = {"command":command, "leftright":leftright, "updown":updown};
	console.log(command);
	console.log(leftright);
	console.log(updown);
	$.ajax({
		url: "http://" + location.host + "/SensingCarWebProject/camera",
		data: json,
		method: "post",
		success: function(data) {
			console.log(data.result);
			if(data.result == "success") {
				$("#cameraLeftRight").attr("onchange","camera('change',this.value,'" + data.updown + "','lr')");
				$("#cameraUpDown").attr("onchange","camera('change','" + data.leftright + "',this.value,'ud')");
				
				$("#leftrightAngle").html(data.leftright + "º");
				$("#updownAngle").html(data.updown + "º");
				
				if(flag == "lr") {
					$("#leftrightAngle").css("color", "red");
					$("#updownAngle").css("color", "black");
				} else if(flag == "ud") {
					$("#leftrightAngle").css("color", "black");
					$("#updownAngle").css("color", "red");
				}
			}
		}
	});
}