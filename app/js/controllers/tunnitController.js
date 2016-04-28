var app = angular.module("elementApp");

app.controller('tunnitController', ['$scope','$http','$sce', function($scope, $http, $sce){
	$(".fb-page").hide();
	$scope.Tunnit = '';
	$scope.Tuntikuvaukset = '';
	$scope.Kausi = '';

	$http.get('res/tunnit.json').
	then(function(res){
		var KausiData = res.data[1][0] 
		$scope.Kausi = KausiData.season;
		$scope.KausiKuvaus = $sce.trustAsHtml(KausiData.description);
		$scope.VainKuvaus = KausiData.onlyDescription;
		$scope.Tunnit = res.data[0];
	});
	$http.get('res/tuntikuvaukset.json').
	then(function(res){
		$scope.Tuntikuvaukset = res.data;
	});


}]);
