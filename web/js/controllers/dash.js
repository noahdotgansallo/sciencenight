webApp
	.controller('DashController', function($scope, $http, baseRouter, Citrus, $interval){

		$scope.load = function(){

			url = baseRouter.route('view');

			$http.get(url).then(
				function(response){

					$scope.subjects = response.data.data;

					console.log($scope.subjects);

				});

		}

		$scope.load();

		$interval(function(){

			$scope.load();

		}, 10000);

	})

	.controller('CreateController', function($scope, $http, baseRouter, Citrus){

		$scope.formData = {};

		$scope.create = function(){

			url = baseRouter.route('create');

			console.log(url);

			$http.post(url, $scope.formData).then(
				function(response){


				});


		}

	});