<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!doctype html>
<div class="weatherdetail">
<div id="weatherInfoBox">
	<div class="weatherBackground">
		<h1 id="city"></h1>
		<table id="weatherBox" >
			<tr id="summaryBox">
				<td id="iconWD"><canvas id="weatherIcon" width="150" height="150"></canvas></td>
				<td ><div id="weatherStatus"></div></td>
			</tr>
		</table>
		<span id="weatherTemperature"></span>
		<br/>
		<span id="weatherWind"></span>
		<br/>
		<span id="weatherPrecip"></span>
		<br/>
	</div>
	<br/>
	<br/>
	<div class="weatherWeekday">
		<div id="day1"></div>
		<div id="iconW1"><canvas id="iconD1" width="50" height="50"></canvas></div>
		<div id="tempMaxMin">
		<span id="tempMaxD1"></span>
		<span id="tempMinD1"></span>
		</div>
	</div>
	<div class="weatherWeekday">
		<div id="day2"></div>
		<div id="iconW2"><canvas id="iconD2" width="50" height="50"></canvas></div>
		<div id="tempMaxMin">
		<span id="tempMaxD2"></span>
		<span id="tempMinD2"></span>
		</div>
	</div>
	<div class="weatherWeekday">
		<div id="day3"></div>
		<div id="iconW3"><canvas id="iconD3" width="50" height="50"></canvas></div>
		<div id="tempMaxMin">
		<span id="tempMaxD3"></span>
		<span id="tempMinD3"></span>
		</div>
	</div>
	<div class="weatherWeekday">
		<div id="day4"></div>
		<div id="iconW4"><canvas id="iconD4" width="50" height="50"></canvas></div>
		<div id="tempMaxMin">
		<span id="tempMaxD4">°/</span>
		<span id="tempMinD4"></span>
		</div>
	</div>
	<div class="weatherWeekday">
		<div id="day5"></div>
		<div id="iconW5"><canvas id="iconD5" width="50" height="50"></canvas></div>
		<div id="tempMaxMin">
		<span id="tempMaxD5"></span>
		<span id="tempMinD5"></span>
		</div>
	</div>
	<div class="weatherWeekday">
		<div id="day6"></div>
		<div id="iconW6"><canvas id="iconD6" width="50" height="50"></canvas></div>
		<div id="tempMaxMin">
		<span id="tempMaxD6"></span>
		<span id="tempMinD6"></span>
		</div>
	</div>
</div>
</div>