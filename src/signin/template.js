var yo = require('yo-yo');
var landing = require('../landing');

var signinForm = yo`<div class="col s12 m7">
	<div class="row">
		<div class="signup-box">
			<h1 class="platzigram">Me Acuerdo</h1>
			<form class="signup-form">
			<div class="section">
				<a href="https://www.facebook.com" target="_blank" class="btn btn-fb hide-on-small-only">Inicia tú sesión con Facebook</a>
				<a href="https://www.facebook.com" target="_blank" class="btn btn-fb hide-on-med-and-up">Inicia con Facebook</a>
			</div>
			<div class="divider"></div>
				<div class="section">
					<input type="text" name="username" placeholder="Nombre de usuario">
					<input type="password" name="password" placeholder="Password">
					<button class="btn waves-effect waves-light btn btn-signup" type="submit">Inicia sesión</button>
				</div>
			</form>
		</div>
	</div>
	<div class="row">
		<div class="login-box">
			No tienes una cuenta? <a href="/signup">Regístrate</a>
		</div>
	</div>
</div>`;

module.exports = landing(signinForm);