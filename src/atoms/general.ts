import { atom } from "jotai";

export type GeneralContent = {
	name: string;
	lastName: string;
};

export const generalDataAtom = atom<GeneralContent>({
	name: "Artem",
	lastName: "Poliukhovych",
});
