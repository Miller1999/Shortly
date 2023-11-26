const Card = ({
	link,
	long = "",
	short = "",
	image = "",
	title = "",
	description = "",
}) => {
	if (link) {
		return (
			<article className="card__link">
				<div className="card__longlink">
					<a href={long}>{long}</a>
				</div>
				<a href={short}>{short}</a>
				<button>Copy</button>
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
