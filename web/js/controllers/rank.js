webApp
	.controller('LeaderboardController', function($scope, $http, baseRouter, Citrus, $interval){

		$scope.load = function(){

			url = baseRouter.route('utility/leaderboard');

			$http.get(url).then(
				function(response){

					if(Citrus.decide(response)){

						console.log(response.data.data);

						$scope.rank = response.data.data;					

					} else {

						$scope.setError(response.data.error);

					}

					$scope.ranks = response.data.data;

				});

		}

		$scope.load();

		$interval(function(){

			$scope.load();

		}, 10000);

	});