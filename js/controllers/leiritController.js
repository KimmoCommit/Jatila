var app = angular.module("elementApp");

app.controller('leiritController', ['$scope','$http', function($scope, $http){

	$scope.Leirit = '';
	$http.get('res/leirit.json').
	then(function(res){
		$scope.Leirit = res.data;
	});
}]);


