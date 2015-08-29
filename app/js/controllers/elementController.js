var app = angular.module("elementApp");

app.controller('elementController', ['$scope','$http', function($scope, $http){
	$(".fb-page").hide();
	$scope.Horses = '';
	$http.get('res/elements.json').
	then(function(res){
		$scope.Horses = res.data;
	});

}]);