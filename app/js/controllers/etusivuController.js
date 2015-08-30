var app = angular.module("elementApp");

app.controller('etusivuController', ['$scope','$http','$sce', function($scope, $http, $sce){
	$scope.welcomeText = '';
	$http.get('res/etusivu.json').
	then(function(res){
		$scope.welcomeText = $sce.trustAsHtml(res.data[0].welcomeText);
	});
	$(".fb-page").show();
}]);
