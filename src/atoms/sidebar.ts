import { atom } from "jotai";

type SidebarLink = {
	title: string;
	cssClass: string;
	link: string;
	linkUrl: string;
};

export const sidebarAtom = atom<SidebarLink[]>([
	{
		title: "Github",
		cssClass: "github",
		link: "github.com/nergal",
		linkUrl: "https://github.com/nergal",
	},
	{
		title: "LinkedIn",
		cssClass: "linkedin",
		link: "linkedin.com/in/artempoluhovich",
		linkUrl: "https://www.linkedin.com/in/artempoluhovich",
	},
	{
		title: "Skype",
		cssClass: "skype",
		link: "nergal-omg",
		linkUrl: "skype:nergal-omg?chat",
	},
	{
		title: "Facebook",
		cssClass: "facebook",
		link: "/nergalic",
		linkUrl: "https://facebook.com/nergalic",
	},
]);
