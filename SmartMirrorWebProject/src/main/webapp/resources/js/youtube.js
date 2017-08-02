//var GoogleAuth;
//var youtubeID;
//
//function handleClientLoad() {
//	    gapi.load('client:auth2', initClient);
//	  }
//
//
//function initClient() {
//	    // Initialize the gapi.client object, which app uses to make API requests.
//	    // Get API key and client ID from API Console.
//	    // 'scope' field specifies space-delimited list of access scopes
//
//	    gapi.client.init({
//	        'clientId': '383922736441-cdmm1q4ir1fiujbcifafo3in2in02sig.apps.googleusercontent.com',
//	        'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
//	        'scope': 'https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtubepartner'
//	    }).then(function () {
//	      GoogleAuth = gapi.auth2.getAuthInstance();
//
//	      // Listen for sign-in state changes.
//	      GoogleAuth.isSignedIn.listen(updateSigninStatus);
//
//	      // Handle initial sign-in state. (Determine if user is already signed in.)
//	      setSigninStatus();
//
////	      handleAuthClick(event);
//	    });
//	  }
//
////function handleAuthClick(event) {
////	    // Sign user in after click on auth button.
////	    GoogleAuth.signIn();
////	  }
//
//	  function setSigninStatus() {
//	    var user = GoogleAuth.currentUser.get();
//	    isAuthorized = user.hasGrantedScopes('https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtubepartner');
//	    // Toggle button text and displayed statement based on current auth status.
//	    if (isAuthorized) {
//	      defineRequest();
//	    }
//	  }
//
//	  function updateSigninStatus(isSignedIn) {
//	    setSigninStatus();
//	  }
//
//	  function createResource(properties) {
//	    var resource = {};
//	    var normalizedProps = properties;
//	    for (var p in properties) {
//	      var value = properties[p];
//	      if (p && p.substr(-2, 2) == '[]') {
//	        var adjustedName = p.replace('[]', '');
//	        if (value) {
//	          normalizedProps[adjustedName] = value.split(',');
//	        }
//	        delete normalizedProps[p];
//	      }
//	    }
//	    for (var p in normalizedProps) {
//	      // Leave properties that don't have values out of inserted resource.
//	      if (normalizedProps.hasOwnProperty(p) && normalizedProps[p]) {
//	        var propArray = p.split('.');
//	        var ref = resource;
//	        for (var pa = 0; pa < propArray.length; pa++) {
//	          var key = propArray[pa];
//	          if (pa == propArray.length - 1) {
//	            ref[key] = normalizedProps[p];
//	          } else {
//	            ref = ref[key] = ref[key] || {};
//	          }
//	        }
//	      };
//	    }
//	    return resource;
//	  }
//
//	  function removeEmptyParams(params) {
//	    for (var p in params) {
//	      if (!params[p] || params[p] == 'undefined') {
//	        delete params[p];
//	      }
//	    }
//	    return params;
//	  }
//
//	  function executeRequest(request) {
//	    request.execute(function(response) {
//	      youtubeID = response.items[0].id.videoId;
//	      console.log(youtubeID);
//	    });
//	  }
//
//	  function buildApiRequest(requestMethod, path, params, properties) {
//	    params = removeEmptyParams(params);
//	    var request;
//	    if (properties) {
//	      var resource = createResource(properties);
//	      request = gapi.client.request({
//	          'body': resource,
//	          'method': requestMethod,
//	          'path': path,
//	          'params': params
//	      });
//	    } else {
//	      request = gapi.client.request({
//	          'method': requestMethod,
//	          'path': path,
//	          'params': params
//	      });
//	    }
//	    executeRequest(request);
//	  }
//
//	  /***** END BOILERPLATE CODE *****/
//
//	  
//	  function defineRequest() {
//	// See full sample for buildApiRequest() code, which is not 
//	// specific to a particular youtube or youtube method.
//
//	buildApiRequest('GET',
//	                '/youtube/v3/search',
//	                {'maxResults': '1',
//	                 'part': 'snippet',
//	                 'q': '스마트미러',
//	                 'type': 'video'});
//	  }	

//-------------------------------------------------------------------------------

//	  var tag = document.createElement('script');
//
//      tag.src = "https://www.youtube.com/iframe_api";
//      var firstScriptTag = document.getElementsByTagName('script')[0];
//      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      player = new YT.Player('player', {
//          height: '360',
//          width: '640',
//          videoId: youtubeID,
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });   
//      function onYouTubeIframeAPIReady() {
//        player = new YT.Player('player', {
//          height: '360',
//          width: '640',
//          videoId: youtubeID,
//          events: {
//            'onReady': onPlayerReady,
//            'onStateChange': onPlayerStateChange
//          }
//        });   
//      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 10000000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }