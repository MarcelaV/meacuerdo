 var express = require('express');
 
 var app = express();

 app.set('view engine', 'pug');

 app.use(express.static('public'));

 app.get('/', function (req, res){
	res.render('index', { title: 'Me Acuerdo' });
})

 app.get('/signup', function (req, res){
	res.render('index', { title: 'Me Acuerdo - Signup' });
})

 app.get('/signin', function (req, res){
	res.render('index', { title: 'Me Acuerdo - Signin' });
})

 app.get('/api/pictures', function (req, res){
	var pictures = [
		{
			user: {
				username: 'User',
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

	setTimeout(function(){
		res.send(pictures);
	}, 50)
})

 app.listen(3000, function(err){
	if (err) return console.log("Hubo un error"), process.exit(1);

	console.log('Proyecto escuchando en puerto 3000');
})