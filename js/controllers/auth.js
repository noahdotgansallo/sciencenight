webApp
	.controller('AuthController', function($scope, $http, baseRouter, Citrus, $location){
		
		$scope.formData = {};

		$scope.loggedIn = false;

		$scope.login = function()
		{
			url = baseRouter.route('auth/login');

			$scope.showLoading();

			$http.post(url, $scope.formData).then(
				function(response){

					$scope.hideLoading();

					if(Citrus.decide(response)){

						$scope.setLoggedIn();

						$scope.formData = {};

						$location.url('home')						

					} else {

						$scope.setError(response.data.error);

					}


				}
			);
			
		}

		$scope.register = function()
		{
			url = baseRouter.route('auth/register');

			$scope.formData.theme = "teal";

			$scope.showLoading();

			$http.post(url, $scope.formData).then(
				function(response){

					$scope.hideLoading();

					if(Citrus.decide(response)){

						$scope.setSuccess('Your account has been registered! Please check your email for an activation link!');

						Citrus.success();

					} else {

						$scope.formData = {};

						$scope.setError(response.data.error);

					}

				}
			);
			
		}
	})

	.controller('ActivateController', function($scope, $http, baseRouter, Citrus, $location, $routeParams){

		//console.log($routeParams.activationCode);

		$scope.showLoading();

		var code = $routeParams.activationCode;

		url = baseRouter.route('auth/activate/'+code);

		$http.get(url).then(
			function(response){

				$scope.hideLoading();

				$scope.setLoggedIn();


				if(Citrus.decide(response))
				{

					$scope.setSuccess('Your account has been activated! Let the games begin!');

					Citrus.success();

				} else{

					$scope.setError(response.data.error);

				}
			});

	})

	.controller('ResetController', function($scope, $http, baseRouter, Citrus, $location, $routeParams){

		$scope.formData = {};

		$scope.requestReset = function(){

			url = baseRouter.route('user/reset/request');

			$scope.showLoading();


			$http.post(url, $scope.formData).then(
				function(response){

					$scope.hideLoading();

					if(Citrus.decide(response)){

						$scope.formData = {};

						$scope.setSuccess('Please check your email to finish resetting your password');

						Citrus.success();

						$location.url('/');					

					} else {

						$scope.setError(response.data.error);

					}

				}
			);

		}

		$scope.resetPassword = function(){

			url = baseRouter.route('user/reset');

			$scope.showLoading();

			$scope.formData.code = $routeParams.resetCode;

			$http.post(url, $scope.formData).then(
				function(response){

					$scope.hideLoading();

					if(Citrus.decide(response)){

						$scope.formData = {};

						$scope.setSuccess('Your password has been reset');

						Citrus.success();

						$location.url('/');					

					} else {

						$scope.setError(response.data.error);

					}

				}
			);

		}

	});