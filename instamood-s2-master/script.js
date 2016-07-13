var INSTA_API_BASE_URL = "https://api.instagram.com/v1";
var app = angular.module('Instamood',[]);

app.controller('MainCtrl', function($scope, $http) {
  // get the access token if it exists
	$scope.hasToken = true;
	var token = window.location.hash;
	console.log(token);
  if (!token) {
    $scope.hasToken = false;
  }
  token = token.split("=")[1];

  $scope.getInstaPics = function() {
	  var path = "/users/self/media/recent";
	  var mediaUrl = INSTA_API_BASE_URL + path;
	  $http({
	    method: "JSONP",
	    url: mediaUrl,
	    params: {
	    	callback: "JSON_CALLBACK",
	    	access_token: "23550880.07d9e9d.4853a65d53714de6a9c6bb10a6e16e90"
        // you need to add your access token here, as per the documentation
	    }
	  }).then(function(response) {
	  	console.log(response);
     	$scope.picArray = response.data.data;
      // now analyze the sentiments and do some other analysis
      // on your images 
	  })
	};

	$scope.analyzeSentiments = function() {
    // when you call this function, $scope.picArray should have an array of all 
    // your instas. Use the sentiment analysis API to get a score of how positive your 
    // captions are
    	var totalLikes=0;
    	var egoCount=0;
    	var n=$scope.picArray.length;
    	var capLength=0;
    	var numTag=0;
        var SundayCount =0;
        var MondayCount = 0;
        var TuesdayCount = 0;
        var WednesdayCount = 0;
        var ThursdayCount = 0;
        var FridayCount = 0;
        var SaturdayCount = 0;
        var length = 0;
        var tags = 0; 

    	for (var i=0; i<n; i++){
    		totalLikes+=$scope.picArray[i].likes.count;
    		if($scope.picArray[i].user_has_liked_) egoCount++;
    		if($scope.picArray[i].caption !== null){
    			capLength+=$scope.picArray[i].caption.text.length;
    		}
    		numTag+=$scope.picArray[i].tags.length;

            var timestamp = $scope.picAwway[i].created_time;
            var a = new Date(timestamp*1000);
            var days = ("Sunday", "Monday", "Tuesday", "Wednesday","Thursday", "Friday", "Saturday");
            var dayOfWeek = days[a.getDay()]

            if (dayOfWeek === "Sunday") {
                SundayCount = SundayCount + 1;
            }
            else if (dayOfWeek === "Monday"){
                MondayCount = MondayCount + 1;
            }
            else if (dayOfWeek === "Tuesday"){
                TuesdayCount = TuesdayCount + 1;
            }
            else if (dayOfWeek === "Wednesday"){
                WednesdayCount = WednesdayCount + 1;
            }
            else if (dayOfWeek === "Thursday"){
                ThursdayCount = ThursdayCount + 1;
            }
            else if (dayOfWeek === "Friday"){
                FridayCount = FridayCount + 1;
            }
            else if (dayOfWeek === "Saturday"){
                SaturdayCount = SaturdayCount + 1;
            }
                	}
    	$scope.pop=totalLikes/n;
    	$scope.ego=egoCount/n;
    	$scope.brevity=capLength/n;
    	$scope.thirst=numTag/n;
    }
   
    
});
