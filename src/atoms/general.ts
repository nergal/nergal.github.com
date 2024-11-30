import { atom } from "jotai";

export type GeneralContent = {
	name: string;
	lastName: string;
	title: string;
};

export const generalDataAtom = atom<GeneralContent>({
	name: "Artem",
	lastName: "Poliukhovych",
	title: "Full Stack Web Developer",
});
