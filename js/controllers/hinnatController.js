var app = angular.module("elementApp");

app.controller('hinnatController', ['$scope','$http', function($scope, $http){
	$scope.Hinnat = '';
	$http.get('res/hinnat.json').
	then(function(res){
		$scope.Hinnat = res.data;
	});

}]);