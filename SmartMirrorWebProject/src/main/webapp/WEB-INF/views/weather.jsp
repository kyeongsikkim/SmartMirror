<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!doctype html>
<div class="weatherdetail">
	<div class="weatherBackground">
		<h1 id="city"></h1>
		<table id="weatherBox" >
			<tr id="summaryBox">
				<td id="iconWD"><canvas id="weatherIcon" width="100" height="100"></canvas></td>
				<td ><div id="weatherStatus"></div></td>
			</tr>
		</table>
		<span id="weatherTemperature"></span>
		<span id="weatherWind"></span>
		<span id="weatherPrecip">%</span>
	</div>
	<div class="weatherWeekday">
		<div id="day1"></div>
		<div id="iconW1"><canvas id="iconD1" width="30" height="30"></canvas></div>
		<div id="tempMaxMin">
		<span id="tempMaxD1">°/</span>
		<span id="temMinD1"></span>
		</div>
	</div>
	<div class="weatherWeekday">
		<div id="day2"></div>
		<div id="iconW2"><canvas id="iconD2" width="30" height="30"></canvas></div>
		<div id="tempMaxMin">
		<span id="tempMaxD2">°/</span>
		<span id="temMinD2"></span>
		</div>
	</div>
	<div class="weatherWeekday">
		<div id="day3"></div>
		<div id="iconW3"><canvas id="iconD3" width="30" height="30"></canvas></div>
		<div id="tempMaxMin">
		<span id="tempMaxD3">°/</span>
		<span id="temMinD3"></span>
		</div>
	</div>
	<div class="weatherWeekday">
		<div id="day4"></div>
		<div id="iconW4"><canvas id="iconD4" width="30" height="30"></canvas></div>
		<div id="tempMaxMin">
		<span id="tempMaxD4">°/</span>
		<span id="temMinD4"></span>
		</div>
	</div>
	<div class="weatherWeekday">
		<div id="day5"></div>
		<div id="iconW5"><canvas id="iconD5" width="30" height="30"></canvas></div>
		<div id="tempMaxMin">
		<span id="tempMaxD5">°/</span>
		<span id="temMinD5"></span>
		</div>
	</div>
	<div class="weatherWeekday">
		<div id="day6"></div>
		<div id="iconW6"><canvas id="iconD6" width="30" height="30"></canvas></div>
		<div id="tempMaxMin">
		<span id="tempMaxD6">°/</span>
		<span id="temMinD6"></span>
		</div>
	</div>
</div>