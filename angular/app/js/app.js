'use strict';

angular.module('endlessApp', [
	'ngRoute',
	'endlessApp.directives',
	'endlessApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/list', {templateUrl: 'partials/list.html', controller: 'ListCtrl'});
	$routeProvider.otherwise({redirectTo: '/list'});
}]);
