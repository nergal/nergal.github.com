import { sortBy } from "lodash";
import React from "react";

import { useAtomValue } from "jotai";
import { experienceAtom } from "../../atoms/experience";
import { ExperienceItem } from "../utils/ExperienceItem";

export const Experience = () => {
	const experienceContent = useAtomValue(experienceAtom);

	return (
		<section>
			{sortBy(experienceContent, (item) => new Date(item.startDate).getTime())
				.reverse()
				.map((item) => (
					<ExperienceItem key={item.title} item={item} />
				))}
		</section>
	);
};
