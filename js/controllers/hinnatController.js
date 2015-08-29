var app = angular.module("elementApp");

app.controller('hinnatController', ['$scope','$http', function($scope, $http){
	$(".fb-page").hide();
	$scope.Hinnat = '';
	$http.get('res/hinnat.json').
	then(function(res){
		$scope.Hinnat = res.data;
	});

}]);