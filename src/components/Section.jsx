import Card from "./Card";
import Brand from "../assets/images/icon-brand-recognition.svg";
import Records from "../assets/images/icon-detailed-records.svg";
import Customizable from "../assets/images/icon-fully-customizable.svg";

const Section = ({
	kind,
	setConverted,
	setOriginal,
	setLinks,
	links,
	original,
	converted,
}) => {
	const convertLink = async () => {
		try {
			const response = await fetch(
				"https://corsproxy.io/?" +
					encodeURIComponent("https://cleanuri.com/api/v1/shorten"),
				{
					method: "POST",
					headers: {
						"Content-Type": "application/x-www-form-urlencoded",
					},
					body: new URLSearchParams({
						url: original,
					}),
				}
			);
			return await response.json();
		} catch (error) {
			console.error("Error:", error);
		}
	};
	const urlToConvert = () => {
		const input = document.getElementById("url");
		setOriginal(input.value);
	};
	const infoCards = [
		{
			title: "Brand Recognition",
			description:
				"Boost your brand recognition with each click. Generic links do not mean a thing. Branded links help instil confidence in your content",
			image: Brand,
		},
		{
			title: "Detailed Records",
			description:
				"Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
			image: Records,
		},
		{
			title: "Fully Customizable",
			description:
				"Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
			image: Customizable,
		},
	];
	if (kind == "float") {
		return (
			<section className="float__container">
				<input
					id="url"
					placeholder="Shorten a link here..."
					onBlur={urlToConvert}
				/>
				<button
					onClick={async () => {
						const data = await convertLink();
						setLinks([...links, { short: data.result_url, long: original }]);
						setConverted(data.result_url);
					}}
				>
					Shorten it
				</button>
			</section>
		);
	}
	if (kind == "introduction") {
		return (
			<section className="introduction__container">
				<div className="introduction__image" />
				<div className="introduction__text">
					<h1>More than just shorter links</h1>
					<p>
						Build your brand{"'"}s recognition and get detailed insights on how
						your links are performing
					</p>
					<button>Get Started</button>
				</div>
			</section>
		);
	}
	if (kind == "links") {
		return (
			<section className="card__container">
				{links.map((link) => {
					return (
						<Card
							link
							long={link.long}
							short={link.short}
							key={link.short}
							url={converted}
						/>
					);
				})}
			</section>
		);
	}
	if (kind == "statistics") {
		return (
			<section className="statistics__container">
				<div className="line"></div>
				<div className="statistics__description">
					<h2>Advanced Statistics</h2>
					<p>
						Track how your links are performing across the web with our advanced
						statistics dashboard
					</p>
				</div>
				<div className="statistics__cards">
					{infoCards.map((card) => {
						return (
							<Card
								image={card.image}
								title={card.title}
								description={card.description}
								key={card.title}
							/>
						);
					})}
				</div>
			</section>
		);
	}
	if (kind == "boost") {
		return (
			<section className="boost__container">
				<h3>Boost your links today</h3>
				<button>Get Started</button>
			</section>
		);
	}
};

export default Section;
