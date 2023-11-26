import Logo from "../assets/images/logo.svg";

const Header = () => {
	return (
		<header>
			<picture className="header__logo">
				<img src={Logo} alt="Shortly" />
			</picture>
			<div className="header__nav">
				<button>
					<img src="https://www.svgrepo.com/show/532195/menu.svg" alt="menu" />
				</button>
			</div>
		</header>
	);
};

export default Header;
