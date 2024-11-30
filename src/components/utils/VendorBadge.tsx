import React, { type FC } from "react";

type Props = {
	name: string;
	url?: string;
};

export const VendorBadge: FC<Props> = ({ name, url }) => {
	if (!name) return null;

	if (url) {
		return (
			<span className="normal-case">
				(at{" "}
				<a
					className="underline decoration-1 underline-offset-4 decoration-black decoration-dotted text-blue-500 hover:text-blue-800"
					target="_blank"
					rel="noopener noreferrer"
					href={url}
				>
					{name}
				</a>
				)
			</span>
		);
	}

	return <span className="normal-case">(at {name})</span>;
};
