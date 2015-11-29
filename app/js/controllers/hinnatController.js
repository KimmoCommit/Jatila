var app = angular.module("elementApp");

app.controller('hinnatController', ['$scope','$http','$sce', function($scope, $http, $sce){
	$(".fb-page").hide();
	$scope.Hinnat = '';
	$http.get('res/hinnat.json').
	then(function(res){
		$scope.Hinnat = res.data.prices
		$scope.ErityisTarjous = $sce.trustAsHtml(res.data.specialOffer);
	});

}]);