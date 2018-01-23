var page = require('page');
var yo = require('yo-yo');
var empty = require('empty-element');

var main = document.getElementById('main-container');


page('/', function(ctx, next){
	main.innerHTML = '<a href="/signup">Signup</a>'
})

page('/signup', function(ctx, next){
	var el = yo`<div class="container">
			<div class="row">
				<div class="col s10 push-s1">
					<div class="row">
						<div class="col m5 hide-on-small-only">
							<img src="iphone.png" alt="" class="iphone">
						</div>
						<div class="col s12 m7">
							<div class="row">
								<div class="signup-box">
									<h1 class="platzigram">Me Acuerdo</h1>
									<form class="signup-form">
									<h2>Regístrate y vive los beneficios de vivir en esta generación</h2>
									<div class="section">
										<a href="https://www.facebook.com" target="_blank" class="btn btn-fb hide-on-small-only">Inicia tú sesión con Facebook</a>
										<a href="https://www.facebook.com" target="_blank" class="btn btn-fb hide-on-med-and-up">Inicia con Facebook</a>
									</div>
									<div class="divider"></div>
										<div class="section">
											<input type="email" name="email" placeholder="Correo electrónico">
											<input type="text" name="name" placeholder="Nombre completo">
											<input type="text" name="username" placeholder="Nombre de usuario">
											<input type="password" name="password" placeholder="Password">
											<button class="btn waves-effect waves-light btn btn-signup" type="submit">Regístrate</button>
										</div>
									</form>
								</div>
							</div>
							<div class="row">
								<div class="login-box">
									Ya tienes una cuenta? <a href="/signin">Entra</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>`;
		
		empty(main).appendChild(el);

})

page();