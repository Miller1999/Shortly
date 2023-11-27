import Logo from "../assets/images/logo.svg";
import Facebook from "../assets/images/icon-facebook.svg";
import Twitter from "../assets/images/icon-twitter.svg";
import Pinterest from "../assets/images/icon-pinterest.svg";
import Instagram from "../assets/images/icon-instagram.svg";

const Footer = () => {
	return (
		<footer>
			<picture className="footer__logo">
				<img src={Logo} alt="Shortly" />
			</picture>
			<div className="footer__info">
				<p>Features</p>
				<p>Link Shortening</p>
				<p>Branded Links</p>
				<p>Analytics</p>
			</div>
			<div className="footer__info">
				<p>Resources</p>
				<p>Blog</p>
				<p>Developers</p>
				<p>Support</p>
			</div>
			<div className="footer__info">
				<p>Company</p>
				<p>About</p>
				<p>Our Team</p>
				<p>Careers</p>
				<p>Contact</p>
			</div>
			<div className="footer__socialMedia">
				<img src={Facebook} alt="facebook" />
				<img src={Twitter} alt="Twitter" />
				<img src={Pinterest} alt="Pinterest" />
				<img src={Instagram} alt="Instagram" />
			</div>
		</footer>
	);
};

export default Footer;
