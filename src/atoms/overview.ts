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
		value: ["Javascript", "Java", "Python", "PHP", "Shell"],
	},
	{
		order: 20,
		title: "Frameworks",
		value: ["React", "Angular", "NodeJS", "Dropwizard", "Yii2", "Django"],
	},
	{
		order: 30,
		title: "Servers",
		value: ["pm2", "flask", "PHP-FPM", "MySQL", "nginx"],
	},
	{
		order: 40,
		title: "Misc. keywords",
		value: [
			"git",
			"aws",
			"jenkins",
			"api",
			"atlassian stack",
			"redmine",
			"docker",
		],
	},
]);
