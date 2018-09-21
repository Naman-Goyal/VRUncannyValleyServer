import { TestSubject } from "../models";

export const Query = {
	allSubjects: () => {
		return TestSubject.findAll();
	},
	test: () => {
		return "HI";
	}
}