const Card = ({
	link,
	long = "",
	short = "",
	image = "",
	title = "",
	description = "",
}) => {
	function copy() {
		navigator.clipboard.writeText(short);
	}
	const handleClick = () => {
		const buttons = document.querySelectorAll("#copy");
		buttons.forEach((button) => {
			button.addEventListener("click", () => {
				button.style.backgroundColor = "hsl(257, 27%, 26%)";
				button.innerText = "Copied!";
				copy();
			});
			const returnButton = () => {
				button.style.backgroundColor = "hsl(180, 66%, 49%)";
				button.innerText = "Copy";
			};
			setTimeout(returnButton, 2000);
		});
	};
	if (link) {
		return (
			<article className="card__link">
				<div className="card__longlink">
					<a href={long}>{long}</a>
				</div>
				<a href={short}>{short}</a>
				<button id="copy" onClick={handleClick}>
					Copy
				</button>
			</article>
		);
	} else {
		return (
			<article className="card__general">
				<div className="card__logo">
					<img src={image} alt={title} />
				</div>
				<h3>{title}</h3>
				<p>{description}</p>
			</article>
		);
	}
};

export default Card;
