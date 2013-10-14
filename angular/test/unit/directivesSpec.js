'use strict';

/* jasmine specs for directives go here */

describe('directives', function() {
	beforeEach(module('endlessApp.directives'));

	describe('listentry', function() {

		it('should correctly compile the listentry directive', function() {
			inject(function($compile, $rootScope) {
				var element = $compile(
					'<listentry ' +
						'listentry-author="AUTHOR" ' +
						'listentry-body="BODY" ' +
						'listentry-posted="2011-11-11"> ' +
					'</listentry>')($rootScope);

				// Force update cycle for bindings to fire.
				$rootScope.$digest();

				expect(element.find('h4').text()).toEqual('AUTHOR');
				expect(element.find('p').text()).toMatch('BODY');
				expect(element.find('span').text()).toMatch('11/11/2011 12:00AM');
			});
		});

	});
});
