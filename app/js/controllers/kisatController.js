var app = angular.module("elementApp");

app.controller('kisatController', ['$scope','$http', function($scope, $http){
	$(".fb-page").hide();
	$scope.Kisat = '';
	$scope.Kausi = '';
	$http.get('res/kisat.json').
	then(function(res){
		$scope.Kisat = res.data[0];
		$scope.Kausi = res.data[1][0].season;
	});
}]);


