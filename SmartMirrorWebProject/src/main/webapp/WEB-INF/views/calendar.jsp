<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

  <head>
   	<link href="https://fonts.googleapis.com/css?family=Roboto+Condensed" rel="stylesheet">
    <link rel="stylesheet" href="<%=application.getContextPath()%>/resources/css/demo.css"/>
    <link rel="stylesheet" href="<%=application.getContextPath()%>/resources/css/theme2.css"/>
    <meta charset='utf-8' />
  </head>
  
  <body>
  <div class='wrap'>
		<div class='btn-holder'>
			<span id='currentDate'></span>
		</div>
		<div id="calendar"></div> 
	</div>
  
    <script type="text/javascript" src="<%=application.getContextPath()%>/resources/js/calendar.js"></script>
   
  </body>
  
</html>