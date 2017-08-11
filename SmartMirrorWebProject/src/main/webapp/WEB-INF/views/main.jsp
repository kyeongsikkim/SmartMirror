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
		<link href="<%=application.getContextPath()%>/resources/css/weather_detail.css" rel="stylesheet" type="text/css" />
		<link href="<%=application.getContextPath()%>/resources/css/main.css" rel="stylesheet" type="text/css" />
		<link href="<%=application.getContextPath()%>/resources/css/calendar.css" rel="stylesheet" type="text/css" />
		<link href="<%=application.getContextPath()%>/resources/css/command.css" rel="stylesheet" type="text/css" />
		<link href="<%=application.getContextPath()%>/resources/css/audio.css" rel="stylesheet" type="text/css" />
		<link href="<%=application.getContextPath()%>/resources/css/subway.css" rel="stylesheet" type="text/css" />
		<link href="<%=application.getContextPath()%>/resources/css/modal.css" rel="stylesheet" type="text/css" />
		
		<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA6_eWR0fsrBZhick4j6UVdqsImC7NfW4U"></script>
		<script src="http://code.responsivevoice.org/responsivevoice.js" type="text/javascript"></script>
		<script src="https://rawgithub.com/darkskyapp/skycons/master/skycons.js"></script>

		<script src="<%=application.getContextPath()%>/resources/js/annyang.js" type="text/javascript"></script>
		<script src="<%=application.getContextPath()%>/resources/js/speechtotext.js" type="text/javascript"></script>
		<script src="<%=application.getContextPath()%>/resources/js/handlecommand.js" type="text/javascript"></script>
		<script src="<%=application.getContextPath()%>/resources/js/responsivevoice.js" type="text/javascript"></script>
		<script src="<%=application.getContextPath()%>/resources/js/clock.js" type="text/javascript"></script>
		<script src="<%=application.getContextPath()%>/resources/js/rssfeed.js" type="text/javascript"></script>
		<script src="<%=application.getContextPath()%>/resources/js/controller.js" type="text/javascript"></script>
		<script src="<%=application.getContextPath()%>/resources/js/map.js" type="text/javascript"></script>
		<script src="<%=application.getContextPath()%>/resources/js/weather.js" type="text/javascript"></script>
		<script src="<%=application.getContextPath()%>/resources/js/alarm.js" type="text/javascript"></script>	
		<script src="<%=application.getContextPath()%>/resources/js/calendar.js" type="text/javascript"></script>	
		<script src="<%=application.getContextPath()%>/resources/js/youtube_search.js" type="text/javascript"></script>
 		<script src="<%=application.getContextPath()%>/resources/js/weather_detail.js" type="text/javascript"></script>
		<script src="<%=application.getContextPath()%>/resources/js/audio.js" type="text/javascript"></script>
		<script src="<%=application.getContextPath()%>/resources/js/camera.js" type="text/javascript"></script>
		<script src="<%=application.getContextPath()%>/resources/js/subway.js" type="text/javascript"></script>
		<!-- Rss & Weather execute and refresh -->
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
	</head>
	<body>
		<div>
			<div class="row">
				<div class="col-xs-4">
					<!-- weather -->
					<div id="weather">
						<table>
							<tr>
								<td class="iconcell"><canvas id="icon" width="110" height="110"></canvas></td>
								<td class="currentTd"><div id="weatherLocation">Seoul　</div><div id="temperature"></div></td>
							</tr>
						</table>
					</div>
					<div id="summary"></div>
					<p id="weatherHeader"><img class="headericon" src="<%=application.getContextPath()%>/resources/images/weather.png"/> Weekly Weather</p>
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
				<div class="col-xs-2"></div>
				<div class="col-xs-6">
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
					<p id="rssheader"><img class="headericon" src="<%=application.getContextPath()%>/resources/images/newspaper.png" /> Today's Headline</p>
					<div id="rssfeed"></div>
					<!-- schedule -->
					<p id="scheduleheader"><img class="headericon" src="<%=application.getContextPath()%>/resources/images/calendar.png" /> Schedule</p>
					<div id="schedule"></div>
				</div>
			</div>
			
			<div id="help">"아리아"를 불러보세요.</div>
			<div id="content" style="text-align: center;"></div>
			<div id="speech"></div>
			
			<!-- The Modal -->
			<div id="myModal" class="modal">
			
			  <!-- Modal content -->
			  	<img class="modal-content" id="snapshotmodal" width="500px" height="500px">
			
			</div>
		</div>
	</body>
</html>