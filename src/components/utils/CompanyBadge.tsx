import React, { type FC } from "react";
import type { ExperienceContent } from "../../atoms/experience";
import { VendorBadge } from "./VendorBadge";

type Props = {
	item: ExperienceContent;
};

export const CompanyBadge: FC<Props> = ({ item: company }) => {
	const companyString = (
		<span>
			<span className="text-capitalize">{company.companyType}</span>{" "}
			{company.company && ` "${company.company}"`}
		</span>
	);

	return (
		<h2 className="text-2xl font-medium capitalize">
			{company.companyUrl ? (
				<a
					className="underline decoration-1 underline-offset-4 decoration-black decoration-dotted text-blue-500 hover:text-blue-800"
					target="_blank"
					rel="noopener noreferrer"
					href={company.companyUrl}
				>
					{companyString}
				</a>
			) : (
				companyString
			)}
			<VendorBadge name={company.vendor} url={company.vendorUrl} />
			<small className="text-gray-500"> {company.title}</small>
		</h2>
	);
};
