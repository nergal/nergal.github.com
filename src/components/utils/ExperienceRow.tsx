import { useAtomValue } from "jotai";
import React, { PropsWithChildren, type FC, type ReactNode } from "react";
import reactStringReplace from "react-string-replace";

import { definitionsAtom } from "../../atoms/definitions";

export const ExperienceRow: FC<PropsWithChildren> = ({ children }) => {
	const definitions = useAtomValue(definitionsAtom);
	let results = children;

	for (const [key, value] of Object.entries(definitions)) {
		results = reactStringReplace(results as string, key, (match: string) => (
			<span className="group relative w-max" key={`tooltip-${key}`}>
				<mark className="underline decoration-1 underline-offset-4 decoration-black decoration-dotted bg-transparent">
					{match}
				</mark>
				<span className="max-w-52 z-50 pointer-events-none absolute -top-7 left-0 w-max rounded bg-gray-900 px-2 py-1 text-sm font-medium text-gray-50 opacity-0 shadow transition-opacity group-hover:opacity-100">
					{value}
				</span>
			</span>
		));
	}

	return <>{results}</>;
};
