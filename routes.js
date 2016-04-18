webApp
	.config(function($routeProvider, $locationProvider) {
		$routeProvider

	 		.when('/home', {
	    		templateUrl: 'views/dash/dash.html',
	    		controller: 'DashController',
	 		})

	 		.when('/create', {
	    		templateUrl: 'views/create/create.html',
	    		controller: 'CreateController',
	 		})

	 		.when('/chart', {
	    		templateUrl: 'views/chart/chart.html',
	    		controller: 'ChartController',
	 		})
	 	;

	});