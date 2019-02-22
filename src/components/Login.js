import React from 'react';

const Login = props => (
	<nav className="login">
		<h2>Inventory Login</h2>
		<p>Sing IN To Manage your store's Inventory</p>
		<button className="github" onClick={() => props.authenticate('Github')}>
			Log In With Github
		</button>
		<button className="facebook" onClick={() => props.authenticate('Facebook')}>
			Log In With Facebook
		</button>
	</nav>
);

export default Login;
