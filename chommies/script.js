var app = angular.module('chommieApp', ['ngRoute']); 

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'FeedCtrl',
		templateUrl: '/templates/home.html',
	})
});
app.config(function($routeProvider) {
	$routeProvider.when('/me', {
		controller: 'MeCtrl',
		templateUrl: '/templates/mypage.html',
	})
});

app.controller('FeedCtrl', function($scope, $http) {
	$scope.isSending = false;
	console.log("hey");
	$scope.loadData = function () {
		$http({
			url: "http://ixchommies.herokuapp.com/props",
			method: "GET",
			params: {
				token: "dffd634821776b9f298969928e0d8d04"
			}
		}).then(function(response){
			console.log(response);
			$scope.props = response.data;
		})
		$http({
			url: "http://ixchommies.herokuapp.com/brus",
			method: "GET",
			params: {
				token: "dffd634821776b9f298969928e0d8d04"
			}
		}).then(function(response){
			console.log(response);
			$scope.brus = response.data;
		})
	}
	$scope.loadData();

	$scope.sendProps = function(){
		$scope.isSending = true;
		$scope.errorMessage = "";
		console.log($scope.selectedBru);
		$http({
			url: "http://ixchommies.herokuapp.com/props",
			method: "POST",
			params: {
				"token": "dffd634821776b9f298969928e0d8d04"
			},
			data: {
				"for": $scope.selectedBru,
				"props": $scope.newPropsValue
			}
		}).then(function(response){
			console.log(response);
			$scope.props = response.data;
			$scope.newPropsValue = "";
			$scope.loadData();
		}).catch(function(response){
			console.log(response);
			$scope.errorMessage = response.data.message;
		}).finally(function(response){
			$scope.isSending = false;
		})

	};
});
app.controller("MeCtrl", function($scope, $http) {
	console.log("hey");
	$http({
		url: "http://ixchommies.herokuapp.com/props/me",
		method: "GET",
		params: {
			token: "dffd634821776b9f298969928e0d8d04"
		}
	}).then(function(response){
		console.log(response);
		$scope.mes = response.data;

		
	});


	
});
