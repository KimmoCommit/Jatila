var app = angular.module("elementApp");

app.controller('kisatController', ['$scope','$http', function($scope, $http){
	$(".fb-page").hide();
	$scope.Kisat = '';
	$http.get('res/kisat.json').
	then(function(res){
		$scope.Kisat = res.data;
	});
}]);


