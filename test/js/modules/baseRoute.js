angular.module('baseRoute', []).factory('baseRouter', function(){
	return {
		route: function(){
			return "http://localhost:8888/hackgfs/email/api/public/";
		}
	}
})