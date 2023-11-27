import { Fragment } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Footer from "./components/Footer";
import "normalize.css";
import "./app.scss";

function App() {
	return (
		<Fragment>
			<Header></Header>
			<main>
				<Section kind="introduction" />
				<Section kind="float" />
				<Section kind="links" />
				<Section kind="statistics" />
				<Section kind="boost" />
			</main>
			<Footer />
		</Fragment>
	);
}

export default App;
