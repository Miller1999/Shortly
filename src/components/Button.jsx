const Button = ({ children, setShowNav }) => {
	if (setShowNav) {
		return (
			<button onClick={setShowNav} className="generalButton">
				{children}
			</button>
		);
	}

	return <button>{children}</button>;
};

export default Button;
