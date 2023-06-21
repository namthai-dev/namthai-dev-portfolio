import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import About from "./pages/about";
import Projects from "./pages/projects";
import Articles from "./pages/articles";
import ReadArticle from "./pages/readArticle";
import Contact from "./pages/contact";
import Notfound from "./pages/404";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";

export const PREFIX = "/namthai-dev-portfolio"

function App() {
	useEffect(() => {
		if (TRACKING_ID !== "") {
			ReactGA.initialize(TRACKING_ID);
		}
	}, []);

	return (
		<div className="App">
			<Routes>
				<Route path={PREFIX + "/"} element={<Homepage />} />
				<Route path={PREFIX + "/about"} element={<About />} />
				<Route path={PREFIX + "/projects"} element={<Projects />} />
				<Route path={PREFIX + "/articles"} element={<Articles />} />
				<Route path={PREFIX + "/article/:slug"} element={<ReadArticle />} />
				<Route path={PREFIX + "/contact"} element={<Contact />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;
