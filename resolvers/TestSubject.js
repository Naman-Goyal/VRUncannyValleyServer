import { SingleTest } from "../models";

export const TestSubject = {
	tests: (model) => {
		return SingleTest.findByUser(model.id);
	}
}