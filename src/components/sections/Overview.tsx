import { useAtomValue } from "jotai";
import { sortBy } from "lodash";
import React from "react";
import { overviewAtom } from "../../atoms/overview";

export const Overview = () => {
	const overviewContent = useAtomValue(overviewAtom);

	return (
		<section>
			<dl className="grid grid-cols-3">
				{sortBy(overviewContent, "order").map((item) => [
					<dt
						className="col-span-1 mb-0 text-right font-bold"
						key={`dt-${item.title}`}
					>
						{item.title}
					</dt>,
					<dd className="col-span-2 mb-0 ml-4" key={`dd-${item.title}`}>
						{item.value.join(", ")}
					</dd>,
				])}
			</dl>
		</section>
	);
};
