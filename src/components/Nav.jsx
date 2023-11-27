import Button from "./Button";

const Nav = () => {
	return (
		<nav>
			<div className="nav__info">
				<p>Features</p>
				<p>Pricing</p>
				<p>Resources</p>
			</div>
			<div>
				<p>Login</p>
				<Button>Sign Up</Button>
			</div>
		</nav>
	);
};

export default Nav;
