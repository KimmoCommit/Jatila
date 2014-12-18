var app = angular.module("elementApp");

app.controller('hevosetController', ['$scope','$http', function($scope, $http){
	$scope.Hevoset = '';
	$scope.Ponit = '';
	$scope.Muut = '';
	$http.get('res/hevoset.json').
	then(function(res){
		$scope.Hevoset = res.data;
	});
	$http.get('res/ponit.json').
	then(function(res){
		$scope.Ponit = res.data;
	});

	$http.get('res/muutHevoset.json').
	then(function(res){
		$scope.Muut = res.data;
	});


}]);
