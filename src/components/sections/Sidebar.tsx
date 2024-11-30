import { useAtomValue } from "jotai";
import Image from "next/image";
import React from "react";
import { sidebarAtom } from "../../atoms/sidebar";

import facebookIcon from "../../assets/images/facebook.svg";
import gitIcon from "../../assets/images/git.svg";
import linkedinIcon from "../../assets/images/linkedin.svg";

export const Sidebar = () => {
	const sidebarContent = useAtomValue(sidebarAtom);

	const classMap = {
		github: gitIcon,
		linkedin: linkedinIcon,
		facebook: facebookIcon,
	};

	return (
		<div className="flex flex-row items-center justify-between flex-nowrap mx-2 gap-1">
			{sidebarContent
				.filter((x) => Object.keys(classMap).includes(x.cssClass))
				.map((link) => (
					<div className="text-center opacity-85" key={link.cssClass}>
						<a href={link.linkUrl}>
							<Image
								src={classMap[link.cssClass]}
								alt={link.title}
								width={64}
								height={64}
							/>
						</a>
					</div>
				))}
		</div>
	);
};
