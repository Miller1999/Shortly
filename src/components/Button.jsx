const Button = ({ children, setShowNav, convert }) => {
	if (setShowNav) {
		return (
			<button onClick={setShowNav} className="generalButton">
				{children}
			</button>
		);
	} else if (convert) {
		return (
			<button onClick={convert} className="generalButton">
				{children}
			</button>
		);
	}

	return <button>{children}</button>;
};

export default Button;
