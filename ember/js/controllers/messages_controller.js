
Endless.MessagesController = Ember.ArrayController.extend({

	showBottomTotal: function () {
		return this.get('model').get('length')>10;
	}.property('model.length')

});
