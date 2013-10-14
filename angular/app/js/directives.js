'use strict';

angular.module('endlessApp.directives', []).
directive('listentry', [function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {
			author: '@listentryAuthor',
			posted: '@listentryPosted',
			body: '@listentryBody'
		},
		template:
			'<div href="#" class="list-group-item">' +
				"<h4 class=\"list-group-item-heading\">{{author}}</h4>" +
				'<p class="list-group-item-text">' +
					"{{body}} <span class=\"label label-info\">{{posted | date:'dd/MM/yyyy h:mma'}}</span>" +
				'</p>' +
			'</div>',
	};
}]);
