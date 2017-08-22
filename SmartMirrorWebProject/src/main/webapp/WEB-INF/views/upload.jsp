<%@page contentType="text/html; charset=UTF-8"%>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name=viewport
			content="width=device-width initial-scale=1 user-scalable=no">
		<title>Home</title>
		<link href="<%=application.getContextPath()%>/resources/bootstrap-3.3.7/bootstrap-3.3.7-dist/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
		<script src="<%=application.getContextPath()%>/resources/jquery/jquery-3.2.1.min.js" type="text/javascript"></script>
		<script src="<%=application.getContextPath()%>/resources/bootstrap-3.3.7/bootstrap-3.3.7-dist/js/bootstrap.min.js" type="text/javascript"></script>
	
		<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Amaranth" />
		<link href="<%=application.getContextPath()%>/resources/css/upload.css" rel="stylesheet" type="text/css" />
	</head>
	<body>	
		<p class="uploadtitle">Music Upload</p>
		<form method="post" style="padding: 0px 20px 0px 20px" enctype="multipart/form-data">
			<div class="form-group">
				<div class="input-group">
					<span class="input-group-addon"><span class="glyphicon glyphicon-tag"></span></span>
					<input type="file" class="form-control" placeholder="선택" name="mattach" />
				</div>
			</div>
			<input type="submit" class="btn btn-info" value="upload" />
		</form>
	</body>
</html>