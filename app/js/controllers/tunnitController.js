var app = angular.module("elementApp");

app.controller('tunnitController', ['$scope','$http', function($scope, $http){
	$(".fb-page").hide();
	$scope.Tunnit = '';
	$scope.Tuntikuvaukset = '';
	$scope.Kausi = '';

	$http.get('res/tunnit.json').
	then(function(res){
		$scope.Tunnit = res.data[0];
		$scope.Kausi = res.data[1][0].season;
	});
	$http.get('res/tuntikuvaukset.json').
	then(function(res){
		$scope.Tuntikuvaukset = res.data;
	});


}]);
