'use strict';

describe('controllers', function() {
	beforeEach(module('endlessApp.controllers'));

	describe('endlessCtrl', function() {
		var $httpBackend, scope, ctrl;

		beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
			$httpBackend = _$httpBackend_;
			$httpBackend
				.whenGET('../../backend/Message_Controller/get?start=0&pagesize=5').
					respond([
						{Body: '1'},
						{Body: '2'},
						{Body: '3'},
						{Body: '4'},
						{Body: '5'}
					])

			$httpBackend
				.whenGET('../../backend/Message_Controller/get?start=5&pagesize=2').
					respond([
						{Body: '1'},
						{Body: '2'}
					]);

			scope = $rootScope.$new();
			ctrl = $controller('ListCtrl', {$scope: scope});
		}));

		it('should start with empty list', function() {
			expect(scope.messages).toEqual([]);
		});

		it('should be able to load items', function() {
			// Initial fetch
			$httpBackend.flush();
			expect(scope.messages.length).toEqual(5);
			expect(scope.total).toEqual(5);

			// Subsequent fetch of 2
			scope.fetchMore(2);
			$httpBackend.flush();
			expect(scope.messages.length).toEqual(7);
			expect(scope.total).toEqual(7);
		});

	});
});
