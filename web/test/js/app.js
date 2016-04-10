var emailApp = angular.module('emailApp', ['ngAnimate', 'ngMessages', 'ngMaterial', 'ngRoute', 'ngResource', 'baseRoute', 'citrusService'])

.controller('TestCtrl', function($scope, $http, baseRouter, Citrus){
	$http.get(baseRouter.route()+'auth/test').then(function(response){
		var data = response.data;
		Citrus.parse(data);
	});
});