var app = angular.module("elementApp");

app.controller('tunnitController', ['$scope','$http', function($scope, $http){
	$(".fb-page").hide();
	$scope.Tunnit = '';
	$scope.Tuntikuvaukset = '';

	$http.get('res/tunnit.json').
	then(function(res){
		$scope.Tunnit = res.data;
	});
	$http.get('res/tuntikuvaukset.json').
	then(function(res){
		$scope.Tuntikuvaukset = res.data;
	});


}]);
