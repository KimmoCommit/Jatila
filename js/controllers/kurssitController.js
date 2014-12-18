var app = angular.module("elementApp");

app.controller('kurssitController', ['$scope','$http', function($scope, $http){
	$scope.Kurssit = '';
	$http.get('res/kurssit.json').
	then(function(res){
		$scope.Kurssit = res.data;
	});

}]);