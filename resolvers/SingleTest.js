import { MoveData } from "../models";

export const SingleTest = {
	moveData: (model) => {
		return MoveData.findByTest(model.id);
	}
}