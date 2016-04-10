webApp
	.controller('UserController', function($scope, $http, baseRouter, Citrus, $location, $routeParams){

		//console.log($routeParams.activationCode);

		$scope.showLoading();

		var id = $routeParams.userId;

		url = baseRouter.route('user/p/'+id);


		$http.get(url).then(
			function(response){

				$scope.hideLoading();

				console.log(response.data);

				if(Citrus.decide(response))
				{

					$scope.emails = response.data.data.emails;

					$scope.user = response.data.data;

					$scope.path = $location.path();

				} else{

					$scope.setError(response.data.error);

				}
			});

	})