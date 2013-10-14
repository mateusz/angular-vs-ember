
Endless.Router.map(function () {
	this.resource('messages', { path: '/' });
});

Endless.MessagesRoute = Ember.Route.extend({
	model: function () {
		return this.get('store').findAll('message');
	}
});
