import React, { useEffect } from "react";
import ReactGA from "react-ga";
import {
	Additionally,
	Experience,
	General,
	Overview,
	Sidebar,
} from "../components/sections";

ReactGA.initialize("UA-32170510-1");

function App() {
	useEffect(() => {
		ReactGA.pageview(window.location.pathname);
	}, []);

	return (
		<div className="container p-20">
			<div className="grid grid-cols-12 gap-4">
				<div className="col-span-12 lg:col-span-6">
					<General />
				</div>
				<div className="col-span-12 lg:col-span-6">
					<Overview />
				</div>
			</div>

			<hr className="my-12" />

			<div className="grid grid-cols-12 gap-4">
				<div className="lg:col-span-3 col-span-12">
					<Sidebar />
				</div>
				<div className="lg:col-span-9 col-span-12">
					<Experience />

					<hr className="my-12" />

					<Additionally />
				</div>
			</div>
		</div>
	);
}

export default App;
