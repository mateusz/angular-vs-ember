
window.Endless = Ember.Application.create();

// Endless.ApplicationAdapter = DS.FixtureAdapter.extend();

Endless.ApplicationAdapter = DS.RESTAdapter.extend({
	host: '../../backend/Message_Controller/get'
});

// From https://github.com/clintioo/handlebars-date-helpers/blob/master/handlebars-helpers.1.0.0.js
Handlebars.registerHelper('dateFormat', function(context) {
	return moment().format('DD/MM/YYYY hh:mma');
});
