<%@page contentType="text/html; charset=UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name=viewport content="width=device-width initial-scale=1 user-scalable=no">
		
		<script src="<%=application.getContextPath()%>/resources/jquery/jquery-3.2.1.min.js" type="text/javascript"></script>
		<link href="<%=application.getContextPath()%>/resources/bootstrap-3.3.7/bootstrap-3.3.7-dist/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
		<script src="<%=application.getContextPath()%>/resources/bootstrap-3.3.7/bootstrap-3.3.7-dist/js/bootstrap.min.js" type="text/javascript"></script>
		
		<link href="<%=application.getContextPath()%>/resources/css/clock.css" rel="stylesheet" type="text/css" />
		<link href="<%=application.getContextPath()%>/resources/css/rssfeed.css" rel="stylesheet" type="text/css" />
		<link href="<%=application.getContextPath()%>/resources/css/schedule.css" rel="stylesheet" type="text/css" />
		<link href="<%=application.getContextPath()%>/resources/css/map.css" rel="stylesheet" type="text/css" />
	
		<script src="http://code.responsivevoice.org/responsivevoice.js"></script>
		<script src="<%=application.getContextPath()%>/resources/js/annyang.js" type="text/javascript"></script>
		<script src="<%=application.getContextPath()%>/resources/js/startannyang.js" type="text/javascript"></script>
		<script src="<%=application.getContextPath()%>/resources/js/responsivevoice.js" type="text/javascript"></script>
		<script src="<%=application.getContextPath()%>/resources/js/checkscript.js" type="text/javascript"></script>
		<script src="<%=application.getContextPath()%>/resources/js/clock.js" type="text/javascript"></script>
		<script src="<%=application.getContextPath()%>/resources/js/rssfeed.js" type="text/javascript"></script>
		<script src="<%=application.getContextPath()%>/resources/js/controller.js" type="text/javascript"></script>
		<script src="<%=application.getContextPath()%>/resources/js/map.js" type="text/javascript"></script>
		<!-- Rss execute -->
		<script>
			$(function() {
				requestNews();
				setInterval(requestNews, 600000);
			});
		</script>
		<!-- Style -->
		<style>
			body {
				background-color: black;
				overflow: hidden;
			}
			/*.col-md-4 {
				border:1px solid white;
			}
			.col-md-3 {
				border:1px solid white;
			}
			.col-md-5 {
			 	border:1px solid white;
			}*/
		</style>
	</head>
	<body>
		<div>
			<div class="row" style="margin-top:2vh;">
				<div class="col-md-4"></div>
				<div class="col-md-3"></div>
				<div class="col-md-5">
					<!-- clock -->
					<div class="clock">
						<div id="Date"></div>
						<ul class="clockul">
						    <li id="hours" class="clockli"></li>
						    <li id="point" class="clockli">:</li>
						    <li id="min" class="clockli"></li>
						    <li id="sec" class="clocklis"></li>
						</ul>
					</div>
					<!-- rssfeed -->
					<div id="rssheader"><img src="<%=application.getContextPath()%>/resources/images/newspaper.png" style="display:inline;width:2vw;height:2vw;margin:0.3vw 0.3vw 0.6vw 0.3vw;">Today's Headline</div>
					<div id="rssfeed"></div>
					<!-- schedule -->
					<div id="scheduleheader"><img src="<%=application.getContextPath()%>/resources/images/calendar.png" style="display:inline;width:2vw;height:2vw;margin:0.3vw 0.3vw 0.6vw 0.3vw;">Schedule</div>
					<div id="schedule"></div>
				</div>
			</div>
			
			<div id="content" style="text-align: center;"></div>
		</div>
	</body>
</html>