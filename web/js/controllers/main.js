webApp
	.controller('MainController', function($scope, baseRouter, $http, $location, Citrus){

		$scope.errorMessage = null;

		$scope.setError = function(message){

			$scope.errorMessage = message;

		}

		/*$scope.logout = function()
		{

			url = baseRouter.route('auth/logout');

			$scope.showLoading();

			$http.get(url).then(
				function(response){

					$scope.hideLoading();

					if(Citrus.decide(response)){

						$scope.setLoggedIn();

						$location.url('/');						

					} else {

						$scope.setError(response.data.error);

					}

				})

		}

		$scope.setLoggedIn = function(value){

			url = baseRouter.route('auth/check');

			$http.get(url).then(
				function(response){

					$scope.loggedIn = response.data.data;

					if(!$scope.loggedIn){

						//$location.url('/');

					} else{

						if($location.url() == "/")
						{

							$location.url('/home');

						}

					}

				});

		}

		$scope.setLoggedIn();*/

		$scope.setSuccess = function(message){

			$scope.successMessage = message;

		}

		$scope.showLoading = function(){

			angular.element('.overlay').fadeIn('fast', function(){});

			Citrus.hideError(0);

		}

		$scope.hideLoading = function(){

			angular.element('.overlay').fadeOut('fast', function(){});

		}

		$scope.searchView = function(){

			$location.url('/search');		

		}

	});