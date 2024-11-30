import { useAtomValue } from "jotai";
import React from "react";
import { additionalAtom } from "../../atoms/additionally";

export const Additionally = () => {
	const additionalContent = useAtomValue(additionalAtom);

	return (
		<section>
			<h3 className="text-3xl mb-3">Additionally</h3>
			<ul className="list-disc list-inside pl-5">
				{additionalContent.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</section>
	);
};
