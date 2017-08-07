<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!doctype html>
<html>
<header></header>
<div class="weather_detail">
<h1 id="city">Loading...</h1>
<table id="weatherBox" >
	<tr id="summaryBox">
		<td id="iconWD"><canvas id="weatherIcon"></canvas></td>
		<td ><div id="weatherStatus"></div></td>
	</tr>
	<tr id="tempMaxMinBox">
		<td id="iconMax"></td>
		<td id="tempMax">°</td>
		<td id="iconMin"></td>
		<td id="tempMin">°</td>
	</tr>
</table>
<span id="weatherTemperature">°</span>
</div>
</html>
