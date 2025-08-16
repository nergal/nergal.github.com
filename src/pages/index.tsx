import React, { useEffect } from "react";
import {
	Additionally,
	Experience,
	General,
	Overview,
	Sidebar,
} from "../components/sections";

const App = () => (
	<div className="container w-full mx-auto p-10 lg:p-20">
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

export default App;
