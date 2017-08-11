<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<script>
$(function(){
	subwayMap(${x},${y});
});
</script>


	<h2>지하철 정보</h2>
	<br>
	<div style="display: table;border-spacing:10px">
		<c:forEach items="${lineNm}" var="line">
	
            <c:if test="${line eq '1'}">
           <span class=radiusNm style="background-color:#0d3692;">1</span>
            </c:if>
             <c:if test="${line eq '2'}">
          <span class=radiusNm style="background-color:#33a23d;">2</span>
            </c:if>
             <c:if test="${line eq '3'}">
           <span class=radiusNm style="background-color:#fe5b10;">3</span>
            </c:if>
             <c:if test="${line eq '4'}">
            <span class=radiusNm style="background-color:#32a1c8;">4</span>
            </c:if>
             <c:if test="${line eq '5'}">
             <span class=radiusNm style="background-color:#8b50a4;">5</span>
            </c:if>
             <c:if test="${line eq '6'}">
             <span class=radiusNm style="background-color:#c55c1d;">6</span>
            </c:if>
            <c:if test="${line eq '7'}">
           <span class=radiusNm style="background-color:#54640d;">7</span>
            </c:if>
             <c:if test="${line eq '8'}">
             <span class=radiusNm style="background-color:#f51361;">8</span>
            </c:if>
             <c:if test="${line eq '9'}">
            <span class=radiusNm style="background-color:#aa9872;">9</span>
            </c:if>
             <c:if test="${line eq '공항철도'}">
           <span class=radiusSt style="background-color:#3681b7;font-size: 22px;">공항철도</span>
            </c:if>
         
              <c:if test="${line eq '분당'}">
            <span class=radiusSt style="background-color:#ffb300;">분당</span>
            </c:if>
           
              <c:if test="${line eq '에버라인'}">
           <span class=radiusSt style="background-color:#4ea346;">에버라인</span>
            </c:if>
              <c:if test="${line eq '경춘'}">
            <span class=radiusSt style="background-color:#73c7a6;">경춘</span>
            </c:if>
              <c:if test="${line eq '인천1'}">
            <span class=radiusSt style="background-color:#8cadcb;">인천1</span>
            </c:if>
        
             <c:if test="${line eq '인천2'}">
            <span class=radiusSt style="background-color:#f06a00;">인천2</span>
            </c:if>
        
             <c:if test="${line eq '경의중앙'}">
            <span class=radiusSt style="background-color:#73c7a6;">경의중앙</span>
            </c:if>
            
        
             <c:if test="${line eq '경강'}">
            <span class=radiusSt style="background-color:#4169e1;">경강</span>
            </c:if>
        
            
             <c:if test="${line eq '신분당'}">
            <span class=radiusSt style="background-color:#c82127;">신분당</span>
            </c:if>
            
             <c:if test="${line eq '수인'}">
           <span class=radiusSt style="background-color:#ffb300;">수인</span>
            </c:if>
             <c:if test="${line eq '의정부'}">
             <span class=radiusSt style="background-color:#fda600; ">의정부</span>
            </c:if> 
		</c:forEach>
	</div>
	
	<div>
		<div style="background-color:${currColor};text-align: center;display:inline-block;position:relative;left:5%;width:28%;height:120px;border-radius:20px;text-overflow: ellipsis;
	                     overflow: hidden;white-space: nowrap;">
		<span style="font-size:60px;color:white;font-weight:bold;">${beforeStation}</span></div>
		<div style="background-color:${currColor};text-align: center;display:inline-block;position:relative;left:38%;width:28%;height:120px;border-radius:20px;text-overflow: ellipsis;
	                     overflow: hidden;white-space: nowrap;">
			<span style="font-size:60px;color:white;font-weight:bold;">${afterStation}</span></div>
		<div style="background-color:white;text-align: center;border:thick solid ${currColor};display:inline-block;position:relative;left:-24.5%;top:10px;width:35%;height:160px;border-radius:30px;	text-overflow: ellipsis;
	                     overflow: hidden;white-space: nowrap;  ">
		<span style="font-size:80px;color:black;padding-top: 10px;font-weight:bold;">${currStation}</span></div>
	</div>
	<br><br>
	
	<table style="width:90%;border:0px;text-align:left; margin-left: 100px">
	  <tr >
        <td class=td style="text-align: right">${upperTime1}</td>
       <td class=centertd>||</td>
       <td class=td style="text-align:left;">${downTime1}</td>
      </tr>
      <tr>
        <td class=td style="text-align: right">${upperTime2}</td>
       <td  class=centertd>||</td>
        <td class=td style="text-align:left;">${downTime2}</td>
      </tr>
      <tr>
          <td class=td style="text-align: right">${upperTime3}</td>
         <td class=centertd>||</td>
          <td class=td style="text-align:left;">${downTime3}</td>
      
  </table>
<h2>출구정보</h2>
	<div id=subwaymap style="width:80%;height:600px;margin-left:10%"></div>

	
	
 
     









