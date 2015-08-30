var app = angular.module("elementApp");

app.controller('leiritController', ['$scope','$http', function($scope, $http){
	$(".fb-page").hide();
	$scope.Leirit = '';
	$scope.Kausi = '';
	$http.get('res/leirit.json').
	then(function(res){
		$scope.Leirit = res.data[0];
		$scope.Kausi = res.data[1][0].season;
	});

	$scope.Leirikuvaukset = '';

	$http.get('res/leirikuvaukset.json').
	then(function(res){
		$scope.Leirikuvaukset = res.data;
	});




}]);


