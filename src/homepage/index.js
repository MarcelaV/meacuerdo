var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');


page('/signin', function(ctx, next){
	title('Me Acuerdo');
	var main = document.getElementById('main-container');

	var pictures = [
		{
			user: {
				username: 'usuarioprueba',
				avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmNu4qulTDc9BjhKFWkmJDanEyuWTh0h-fUyqq8QsvcOpilZis'
			},
			url: 'office.jpg',
			likes: 0,
			liked: false,
			createAt: new Date()
		},
		{
			user: {
				username: 'usuarioprueba',
				avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmNu4qulTDc9BjhKFWkmJDanEyuWTh0h-fUyqq8QsvcOpilZis'
			},
			url: 'office.jpg',
			likes: 1,
			liked: true,
			createAt: new Date().setDate(new Date().getDate() - 10)
		}
	];

	empty(main).appendChild(template(pictures));
})
