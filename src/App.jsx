import { Fragment } from "react";
import Header from "./components/Header";
import "normalize.css";
import "./app.scss";
import Section from "./components/Section";

function App() {
	return (
		<Fragment>
			<Header></Header>
			<main>
				<Section kind="introduction" />
				<Section kind="float" />
				<Section kind="links" />
				<Section kind="statistics" />
			</main>
			<footer></footer>
		</Fragment>
	);
}

export default App;
