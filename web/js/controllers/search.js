webApp
	.controller('SearchController', function($scope, $http, baseRouter, Citrus, $interval){

		//$scope.searchData = {};

		$scope.searchMail = function(){

			console.log($scope.searchData.q);

			url = baseRouter.route('mail/s?q='+$scope.searchData.q);

			$http.get(url).then(
				function(response){

					$scope.emails = response.data.data;

					$scope.path = $location.path();

					//console.log($scope.emails);

				});
		}

	});