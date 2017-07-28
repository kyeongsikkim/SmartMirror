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
		<link href="<%=application.getContextPath()%>/resources/css/weather.css" rel="stylesheet" type="text/css" />
		<link href="<%=application.getContextPath()%>/resources/css/help.css" rel="stylesheet" type="text/css" />
		
		<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA6_eWR0fsrBZhick4j6UVdqsImC7NfW4U"></script>
		<script src="http://code.responsivevoice.org/responsivevoice.js" type="text/javascript"></script>
		<script src="https://rawgithub.com/darkskyapp/skycons/master/skycons.js"></script>
		<script src="<%=application.getContextPath()%>/resources/js/annyang.js" type="text/javascript"></script>
		<script src="<%=application.getContextPath()%>/resources/js/startannyang.js" type="text/javascript"></script>
		<script src="<%=application.getContextPath()%>/resources/js/responsivevoice.js" type="text/javascript"></script>
		<script src="<%=application.getContextPath()%>/resources/js/checkscript.js" type="text/javascript"></script>
		<script src="<%=application.getContextPath()%>/resources/js/clock.js" type="text/javascript"></script>
		<script src="<%=application.getContextPath()%>/resources/js/rssfeed.js" type="text/javascript"></script>
		<script src="<%=application.getContextPath()%>/resources/js/controller.js" type="text/javascript"></script>
		<script src="<%=application.getContextPath()%>/resources/js/map.js" type="text/javascript"></script>
		<script src="<%=application.getContextPath()%>/resources/js/weather.js" type="text/javascript"></script>
		
		<script type="text/javascript" src="<%=application.getContextPath()%>/resources/js/audio.js"></script>
    	<link rel="stylesheet" href="<%=application.getContextPath()%>/resources/css/audio.css" media="screen">
		<!-- Rss execute -->
		<script>
			$(function() {
				//News Setting
				requestNews();
				setInterval(requestNews, 1200000);
				//Weather Setting
				weatherDefault();
				setInterval(refresh, 1200000);
				setInterval(drawIcon, 1200000);
			});
		</script>
		<!-- Style -->
		<style>
			body {
				background-color: black;
				
			}
		</style>
	</head>
	<body>
		<div>
			<div class="row" style="margin-top:1vh;">
				<div class="col-md-3" style="padding-left:25px;padding-top:7px;">
					<!-- weather -->
					<div id="weather">
						<table>
							<tr>
								<td><canvas id="icon" width="180px" height="180px"></canvas></td>
								<td class="currentTd"><div id="weatherLocation">Seoul</div><div id="temperature"></div></td>
							</tr>
						</table>
					</div>
					<div id="summary"></div>
					<p id="weatherHeader"><img src="<%=application.getContextPath()%>/resources/images/weather.png" style="display:inline;width:2vw;height:2vw;"/> Weekly Weather</p>
					<div id="weekdaysWeather">
						<table>
							<tr></tr>
							<tr>
								<td><span id="weekday1"></span></td>
								<td><span><canvas id="iconW1" width="40px" height="40px"></canvas></span></td>
								<td><span id="tempMax1"></span></td>
								<td><span>/</span></td>
								<td><span id="tempMin1"></span></td>
							</tr>
							<tr>
								<td><span id="weekday2"></span></td>
								<td><span><canvas id="iconW2" width="40px" height="40px"></canvas></span></td>
								<td><span id="tempMax2"></span></td>
								<td><span>/</span></td>
								<td><span id="tempMin2"></span></td>
							</tr>
							<tr>
								<td><span id="weekday3"></span></td>
								<td><span><canvas id="iconW3" width="40px" height="40px"></canvas></span></td>
								<td><span id="tempMax3"></span></td>
								<td><span>/</span></td>
								<td><span id="tempMin3"></span></td>
							</tr>
							<tr>
								<td><span id="weekday4"></span></td>
								<td><span><canvas id="iconW4" width="40px" height="40px"></canvas></span></td>
								<td><span id="tempMax4"></span></td>
								<td><span>/</span></td>
								<td><span id="tempMin4"></span></td>
							</tr>
							<tr>
								<td><span id="weekday5"></span></td>
								<td><span><canvas id="iconW5" width="40px" height="40px"></canvas></span></td>
								<td><span id="tempMax5"></span></td>
								<td><span>/</span></td>
								<td><span id="tempMin5"></span></td>
							</tr>
							<tr>
								<td><span id="weekday6"></span></td>
								<td><span><canvas id="iconW6" width="40px" height="40px"></canvas></span></td>
								<td><span id="tempMax6"></span></td>
								<td><span>/</span></td>
								<td><span id="tempMin6"></span></td>
							</tr>
						</table>
					</div>
				</div>
				<div class="col-md-4"></div>
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
					<p id="rssheader"><img src="<%=application.getContextPath()%>/resources/images/newspaper.png" style="display:inline;width:2vw;height:2vw;margin:0.3vw 0.3vw 0.6vw 0.3vw;"/>Today's Headline</p>
					<div id="rssfeed"></div>
					<!-- schedule -->
					<p id="scheduleheader"><img src="<%=application.getContextPath()%>/resources/images/calendar.png" style="display:inline;width:2vw;height:2vw;margin:0.3vw 0.3vw 0.6vw 0.3vw;"/>Schedule</p>
					<div id="schedule"></div>
					<!-- audio -->
			            <div id="audiobox">
			                	<span class="left" id="npAction">Paused...</span>
				                <span class="right" id="npTitle"></span><br/>
			                    <audio preload id="audio1" controls="controls">Your browser does not support HTML5 Audio!</audio>
			            </div>
				</div>
			</div>
			<div id=help>"사용 가능한 명령어"라고 말해보세요</div>
			
			<div id="content" style="text-align: center;"></div>
			<div id="speech"></div>
		</div>
	</body>
</html>