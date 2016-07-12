var app = angular.module('movieApp', ['ngRoute']); 

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'SearchCtrl',
		templateUrl: '/templates/home.html',
	})
	$routeProvider.when('/movie/:movieId', {
		controller: 'MovieCtrl',
		templateUrl: '/templates/movie.html',
	})
});

app.controller('SearchCtrl', function($scope, $http) {
	$scope.Search = function(){
		$http({
		url: "http://www.omdbapi.com/?",
		method: "GET",
		params: {
			s: $scope.movieSearch
		}
	}).then(function(response) {
		console.log(response);
		$scope.moviesArray = response.data.Search;
	})
}
});

app.controller('MovieCtrl', function($scope, $http, $routeParams) {
	$http({
		url: "http://www.omdbapi.com/?",
		method: "GET",
		params: {
			i: $routeParams.movieId
		}
	}).then(function(response) {
		console.log(response);
		$scope.movie = response.data;
		$http({
			url: "http://api.giphy.com/v1/gifs/search",
			method:"GET",
			params: {
				q: $scope.movie.Title,
				api_key: "dc6zaTOxFJmzC"
			}
		}).then(function(response) {
			console.log(response);
			$scope.movieGif=response.data.data;
			console.log($scope.movieGif);
		})
	})
	
});