
Endless.Message = DS.Model.extend({
	author: DS.attr('string'),
	body: DS.attr('string'),
	posted: DS.attr('date')
});

Endless.Message.FIXTURES = [
{
	id: 1,
	author: 'author1',
	body: 'body1',
	posted: '2011-11-11 11:11:11'
},
{
	id: 2,
	author: 'author2',
	body: 'body2',
	posted: '2011-11-11 11:11:11'
},
{
	id: 3,
	author: 'author3',
	body: 'body3',
	posted: '2011-11-11 11:11:11'
}
];
