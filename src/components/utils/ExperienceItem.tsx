import React, { type FC } from "react";

import type { ExperienceContent } from "../../atoms/experience";
import { CompanyBadge } from "./CompanyBadge";
import { ExperienceRow } from "./ExperienceRow";

type Props = {
	item: ExperienceContent;
};

const dateTimeFormat = new Intl.DateTimeFormat(undefined, {
	year: "numeric",
	month: "short",
});

export const ExperienceItem: FC<Props> = ({ item }) => (
	<article className="mb-12">
		<CompanyBadge item={item} />
		<div className="float-right inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
			{[item.startDate, item.endDate]
				.map((x) => new Date(x))
				.map((date) => (date.getTime() ? dateTimeFormat.format(date) : "now"))
				.join(" - ")}
		</div>

		<h4 className="text-2xl font-medium my-2">
			{item.location.length > 0 && item.location.join(" / ")}
		</h4>

		<ul className="list-disc list-inside pl-5">
			{item.responsibilities.map((row) => (
				<li key={row}>
					<ExperienceRow content={row} />
				</li>
			))}
		</ul>
	</article>
);
