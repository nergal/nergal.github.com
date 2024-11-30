import { atom } from "jotai";

export type OverviewContent = {
	order: number;
	title: string;
	value: string[];
};

export const overviewAtom = atom<OverviewContent[]>([
	{
		order: 10,
		title: "Languages",
		value: ["Typescript", "Rust", "Python", "Java"],
	},
	{
		order: 20,
		title: "Frameworks",
		value: ["React", "Tauri", "Angular", "NodeJS"],
	},
	{
		order: 30,
		title: "Servers",
		value: ["pm2", "flask", "PostgreSQL", "nginx"],
	},
	{
		order: 40,
		title: "Misc. keywords",
		value: [
			"git",
			"aws",
			"jenkins",
			"api",
			"docker",
		],
	},
]);
