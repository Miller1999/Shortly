import { Fragment, useState } from "react";
import Logo from "../assets/images/logo.svg";
import Button from "./Button";
import Nav from "./Nav";

const Header = () => {
	const [showNav, setShowNav] = useState(false);
	function toggleShow() {
		setShowNav(!showNav);
	}

	return (
		<header>
			<picture className="header__logo">
				<img src={Logo} alt="Shortly" />
			</picture>
			<div className="header__nav">
				<Button setShowNav={toggleShow}>
					<img src="https://www.svgrepo.com/show/532195/menu.svg" alt="menu" />
				</Button>
			</div>
			{showNav ? <Nav /> : <Fragment />}
		</header>
	);
};

export default Header;
