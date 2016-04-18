webApp
	.controller('SponsorController', function($scope, $http, baseRouter, Citrus){

		$scope.formData = {};

		$scope.formData.section = {};

		var quotes = [];

		quotes = [
			  {
			    "content": "They don't want us to send emails - send anotha one!",
			  },

			  {
			    "content": "Anotha one!",
			  },

			  {
			    "content": "They don't want us to have sponsors.",
			  },

			  {
			    "content": "Why not send anotha one?",
			  },

			  {
			    "content": "Send anotha one!",
			  },

			  {
			    "content": "The key to success is sponsors.",
			  },

			  {
			    "content": "The key to success is persistence - anotha one!",
			  },

			  {
			    "content": "They don't want you to win that Xbox One",
			  },

			  {
			    "content": "They don't want us to send emails",
			  },

			  {
			    "content": "I appreciate that - you loyal.",
			  },

			  {
			    "content": "Don't ever play yourself.",
			  },

			  {
			    "content": "Walk with me to the path of more sponsors.",
			  },

			  {
			    "content": "Bless up - don't ever send to yourself",
			  },

			  {
			    "content": "Some sites can't handle emails. I can.",
			  },

			  {
			    "content": "Anotha one. Anotha one! ANOTHA ONE!",
			  }
		];

		$scope.getSection = function(section){

			url = baseRouter.route('mail/section');

			url = url + '?section=' + section + '&name=' + encodeURI($scope.formData.company);

			$http.get(url).then(
				function(response){

					if(Citrus.decide(response)){

						$scope.section = response.data.data;

						$scope.section = $scope.section.replace("<br><br>", "");	

						angular.element('#sectionModal').modal('toggle');					

					} else {

						$scope.setError(response.data.error);

					}

				});

		}

		$scope.send = function(){

			url = baseRouter.route('mail/sponsor');

			$scope.showLoading();

			$http.post(url, $scope.formData).then(
				function(response){

					$scope.hideLoading();

					if(Citrus.decide(response)){

						max = quotes.length;

						index = Math.floor(Math.random() * (max-1));

						$scope.setSuccess(quotes[index].content);

						Citrus.success();

						$scope.formData = {};

						$scope.formData.section = {};

					} else {

						$scope.setError(response.data.error);

					}

				});

		}

	})

	.controller('MailDetailController', function($scope, $http, baseRouter, Citrus, $location){


	});;