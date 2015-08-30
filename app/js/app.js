var app = angular.module("elementApp", ['ngRoute']);


app.config(['$routeProvider','$locationProvider','$logProvider', function($routeProvider, $locationProvider, $logProvider){
  //$locationProvider.hashPrefix('!');
$logProvider.debugEnabled(true);
  var appName = 'Jatilan Talli - ';
	$routeProvider
	.when("/", {
		templateUrl: 'views/etusivu.html',
		title: appName + 'Etusivu',
		controller:'etusivuController'

	})
	
	.when("/kurssit", {
		templateUrl: 'views/kurssit.html',
		title: appName + 'Kurssit',
		controller:'kurssitController'
	})

	.when("/kisat", {
		templateUrl: 'views/kisat.html',
		title: appName + 'Kisat',
		controller:'kisatController'
	})

		.when("/leirit", {
		templateUrl: 'views/leirit.html',
		title: appName + 'Leirit',
		controller:'leiritController'
	})

		.when("/hinnat", {
		templateUrl: 'views/hinnat.html',
		title: appName + 'Hinnasto',
		controller:'hinnatController'
	})

		.when("/yhteystiedot", {
		templateUrl: 'views/yhteystiedot.html',
		title: appName + 'Yhteystiedot'
	})

		.when("/talli", {
		templateUrl: 'views/talli.html',
		title: appName + 'Talli'
	})

		.when("/hevoset", {
		templateUrl: 'views/hevoset.html',
		title: appName + 'Hevoset',
		controller:'hevosetController'
	})


		.when("/tunnit", {
		templateUrl: 'views/tunnit.html',
		controller:'tunnitController',
		title: appName + 'Tunnit',
		
	})

	.otherwise({ redirectTo: '/'});

}]);


app.run(['$location', '$rootScope',  function($location, $rootScope) {
	$rootScope.$on('$routeChangeSuccess', function (event, current, previous) {

		$rootScope.title = current.$$route.title;


	});
}]);




	/*
	.config(
	function($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('!');
	//$locationProvider.html5Mode(true);
	$routeProvider.when("/", { templateUrl: "home.html" }).
	when("/other", { templateUrl: "other.html"});
	/*when("/persons/:id",
		{ templateUrl: "partials/person_details.html",
		controller: "ShowCtrl" }).
otherwise( { redirectTo: "/" });});

//$locationProvider.hashPrefix('!');s
	//$locationProvider.html5Mode(true);
	//$locationProvider.hashPrefix('');
	**/


