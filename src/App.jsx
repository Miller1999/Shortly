import { Fragment, useState } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import "normalize.css";
import "./app.scss";

function App() {
	const [original, setOriginal] = useState("");
	const [converted, setConverted] = useState("");
	let [links, setLinks] = useState([]);
	return (
		<Fragment>
			<Header></Header>
			<main>
				<Section kind="introduction" />
				<Section
					kind="float"
					setOriginal={setOriginal}
					setConverted={setConverted}
					setLinks={setLinks}
					links={links}
					original={original}
					converted={converted}
				/>
				<Section kind="links" links={links} />
				<Section kind="statistics" />
				<Section kind="boost" />
			</main>
			<Footer />
		</Fragment>
	);
}

export default App;
