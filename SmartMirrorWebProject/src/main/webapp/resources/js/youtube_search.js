var GoogleAuth;
var youtubeInfo;
var request;

function handleClientLoad() {
	gapi.load('client:auth2', initClient);
}

function initClient() {
	// Initialize the gapi.client object, which app uses to make
	// API requests.
	// Get API key and client ID from API Console.
	// 'scope' field specifies space-delimited list of access
	// scopes

	gapi.client.init(
					{
						'clientId' : '383922736441-cdmm1q4ir1fiujbcifafo3in2in02sig.apps.googleusercontent.com',
						'discoveryDocs' : [ 'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest' ],
						'scope' : 'https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtubepartner'
					}).then(
					function() {
						GoogleAuth = gapi.auth2.getAuthInstance();

						// Listen for sign-in state changes.
						GoogleAuth.isSignedIn.listen(updateSigninStatus);

						// Handle initial sign-in state.
						// (Determine if user is already signed
						// in.)
						setSigninStatus();

						// handleAuthClick(event);
					});
}

// function handleAuthClick(event) {
// // Sign user in after click on auth button.
// GoogleAuth.signIn();
// }

function setSigninStatus() {
	var user = GoogleAuth.currentUser.get();
	isAuthorized = user.hasGrantedScopes('https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtubepartner');
	// Toggle button text and displayed statement based on
	// current auth status.
	if (isAuthorized) {
		defineRequest(youtubeInfo);
	}
}

function updateSigninStatus(isSignedIn) {
	setSigninStatus();
}

function createResource(properties) {
	var resource = {};
	var normalizedProps = properties;
	for ( var p in properties) {
		var value = properties[p];
		if (p && p.substr(-2, 2) == '[]') {
			var adjustedName = p.replace('[]', '');
			if (value) {
				normalizedProps[adjustedName] = value
						.split(',');
			}
			delete normalizedProps[p];
		}
	}
	for ( var p in normalizedProps) {
		// Leave properties that don't have values out of
		// inserted resource.
		if (normalizedProps.hasOwnProperty(p)
				&& normalizedProps[p]) {
			var propArray = p.split('.');
			var ref = resource;
			for (var pa = 0; pa < propArray.length; pa++) {
				var key = propArray[pa];
				if (pa == propArray.length - 1) {
					ref[key] = normalizedProps[p];
				} else {
					ref = ref[key] = ref[key] || {};
				}
			}
		}
		;
	}
	return resource;
}

function removeEmptyParams(params) {
	for ( var p in params) {
		if (!params[p] || params[p] == 'undefined') {
			delete params[p];
		}
	}
	return params;
}

// Search
function executeRequest(request) {
	request.execute(function(response) {
		console.log(response);
		//$('#videoID').html(response.items[0].id.videoId);
		$('#video1').attr('src','//www.youtube.com/embed/'+response.items[0].id.videoId+'?autoplay=0');
		$('#title1').html(response.items[0].snippet.title);
		$('#video2').attr('src','//www.youtube.com/embed/'+response.items[1].id.videoId+'?autoplay=0');
		$('#title2').html(response.items[1].snippet.title);
		$('#video3').attr('src','//www.youtube.com/embed/'+response.items[2].id.videoId+'?autoplay=0');
		$('#title3').html(response.items[2].snippet.title);
		$('#video4').attr('src','//www.youtube.com/embed/'+response.items[3].id.videoId+'?autoplay=0');
		$('#title4').html(response.items[3].snippet.title);
		$('#video5').attr('src','//www.youtube.com/embed/'+response.items[4].id.videoId+'?autoplay=0');
		$('#title5').html(response.items[4].snippet.title);
	});
}

//Play
function playVideo(number) {
	request.execute(function(response) {
		$('#video').attr('src','//www.youtube.com/embed/'+response.items[number].id.videoId+'?autoplay=1&loop=1');		
	});
}

function buildApiRequest(requestMethod, path, params,
		properties) {
	params = removeEmptyParams(params);
	if (properties) {
		var resource = createResource(properties);
		request = gapi.client.request({
			'body' : resource,
			'method' : requestMethod,
			'path' : path,
			'params' : params
		});
	} else {
		request = gapi.client.request({
			'method' : requestMethod,
			'path' : path,
			'params' : params
		});
	}
	executeRequest(request);
}

/** *** END BOILERPLATE CODE **** */

function defineRequest(youtubeInfo) {
	// See full sample for buildApiRequest() code, which is not
	// specific to a particular youtube or youtube method.

	buildApiRequest('GET', '/youtube/v3/search', {
		'maxResults' : '5',
		'part' : 'snippet',
		'q' : youtubeInfo,
		'type' : 'video'
	});
}