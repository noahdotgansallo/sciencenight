angular.module('baseRoute', []).factory('baseRouter', function($location){
	return {
		route: function(string){

			if($location.host() == 'localhost'){

				url = "http://localhost:8888/sciencenight/api/public/"+string;

			} else {

				url = "http://science.hackgfs.io/api/public/"+string;

			}

			return url;
		}
	}
})