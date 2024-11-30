import { useAtomValue } from "jotai";
import React from "react";
import { generalDataAtom } from "../../atoms/general";

export const General = () => {
	const { name, lastName } = useAtomValue(generalDataAtom);

	return (
		<div className="vcard">
			<h1
				className="n fn font-serif text-4xl"
				style={{ fontVariant: "small-caps" }}
			>
				<span className="given-name">{name}</span>
				<span className="family-name">{lastName}</span>
			</h1>
		</div>
	);
};

export default General;
