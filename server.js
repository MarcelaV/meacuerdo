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

 app.listen(3000, function(err){
	if (err) return console.log("Hubo un error"), process.exit(1);

	console.log('Proyecto escuchando en puerto 3000');
})