<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<script>
	$(function(){
		subwayMap(${x},${y});
	});
</script>

<br/>
<div style="display: table; border-spacing: 10px">
	<c:forEach items="${lineNm}" var="line">
		<c:if test="${line eq '1'}">
			<span class="radiusNm" style="background-color: #0d3692;">1</span>
		</c:if>
		<c:if test="${line eq '2'}">
			<span class="radiusNm" style="background-color: #33a23d;">2</span>
		</c:if>
		<c:if test="${line eq '3'}">
			<span class="radiusNm" style="background-color: #fe5b10;">3</span>
		</c:if>
		<c:if test="${line eq '4'}">
			<span class="radiusNm" style="background-color: #32a1c8;">4</span>
		</c:if>
		<c:if test="${line eq '5'}">
			<span class="radiusNm" style="background-color: #8b50a4;">5</span>
		</c:if>
		<c:if test="${line eq '6'}">
			<span class="radiusNm" style="background-color: #c55c1d;">6</span>
		</c:if>
		<c:if test="${line eq '7'}">
			<span class="radiusNm" style="background-color: #54640d;">7</span>
		</c:if>
		<c:if test="${line eq '8'}">
			<span class="radiusNm" style="background-color: #f51361;">8</span>
		</c:if>
		<c:if test="${line eq '9'}">
			<span class="radiusNm" style="background-color: #aa9872;">9</span>
		</c:if>
		<c:if test="${line eq '공항철도'}">
			<span class="radiusSt" style="background-color: #3681b7; font-size: 22px;">공항철도</span>
		</c:if>
		<c:if test="${line eq '분당'}">
			<span class="radiusSt" style="background-color: #ffb300;">분당</span>
		</c:if>
		<c:if test="${line eq '에버라인'}">
			<span class="radiusSt" style="background-color: #4ea346;">에버라인</span>
		</c:if>
		<c:if test="${line eq '경춘'}">
			<span class="radiusSt" style="background-color: #73c7a6;">경춘</span>
		</c:if>
		<c:if test="${line eq '인천1'}">
			<span class="radiusSt" style="background-color: #8cadcb;">인천1</span>
		</c:if>
		<c:if test="${line eq '인천2'}">
			<span class="radiusSt" style="background-color: #f06a00;">인천2</span>
		</c:if>
		<c:if test="${line eq '경의중앙'}">
			<span class="radiusSt" style="background-color: #73c7a6;">경의중앙</span>
		</c:if>
		<c:if test="${line eq '경강'}">
			<span class="radiusSt" style="background-color: #4169e1;">경강</span>
		</c:if>
		<c:if test="${line eq '신분당'}">
			<span class="radiusSt" style="background-color: #c82127;">신분당</span>
		</c:if>
		<c:if test="${line eq '수인'}">
			<span class="radiusSt" style="background-color: #ffb300;">수인</span>
		</c:if>
		<c:if test="${line eq '의정부'}">
			<span class="radiusSt" style="background-color: #fda600;">의정부</span>
		</c:if>
	</c:forEach>
</div>

<div>
	<div class="beforeStationDiv" style="background-color: ${currColor};">
		<span class="beforeStationSpan">${beforeStation}</span>
	</div>
	<div class="currStationDiv" style="border:thick solid ${currColor};">
		<span class="currStationSpan">${currStation}</span>
	</div>
	<div class="afterStationDiv" style="background-color:${currColor};">
		<span class="afterStationSpan">${afterStation}</span>
	</div>
</div>
<br>
<br>

<table class="timetable">
	<tr>
		<td class="tdR">${upperTime1}</td>
		<td class="centertd">||</td>
		<td class="tdL">${downTime1}</td>
	</tr>
	<tr>
		<td class="tdR">${upperTime2}</td>
		<td class="centertd">||</td>
		<td class="tdL">${downTime2}</td>
	</tr>
	<tr>
		<td class="tdR">${upperTime3}</td>
		<td class="centertd">||</td>
		<td class="tdL">${downTime3}</td>
</table>

<div id="subwaymap"></div>














