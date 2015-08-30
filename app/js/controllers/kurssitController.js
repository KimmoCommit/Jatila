var app = angular.module("elementApp");

app.controller('kurssitController', ['$scope','$http', function($scope, $http){
	$(".fb-page").hide();
	$scope.Kurssit = '';
	$scope.Kausi = '';
	$http.get('res/kurssit.json').
	then(function(res){
		$scope.Kurssit = res.data[0];
		$scope.Kausi = res.data[1][0].season;
	});


}]);