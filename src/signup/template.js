var yo = require('yo-yo');
var landing = require('../landing');

var signupForm = yo`<div class="col s12 m7">
	<div class="row">
		<div class="signup-box">
			<h1 class="platzigram">Me Acuerdo</h1>
			<form class="signup-form">
			<h2>Regístrate y vive los beneficios de vivir en esta generación</h2>
			<div class="section">
				<a href="https://www.facebook.com" target="_blank" class="btn btn-fb hide-on-small-only">Inicia tú sesión con Facebook</a>
				<a href="https://www.facebook.com" target="_blank" class="btn btn-fb hide-on-med-and-up"><i class="fa fa-facebook-official"></i>Inicia con Facebook</a>
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
</div>`;

module.exports = landing(signupForm);