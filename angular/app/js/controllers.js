'use strict';

angular.module('endlessApp.controllers', []).
controller('ListCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.total = 0;
	$scope.messages = [];

	$scope.fetchMore = function(amount) {
		$http
			.get('../../backend/Message_Controller/get?start=' + $scope.total + '&pagesize=' + amount)
			.success(function(data) {
				$scope.messages = $scope.messages.concat(data);
				$scope.total = $scope.messages.length;
			});
	};

	$scope.fetchMore(5);
}]);
