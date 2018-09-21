import { Vector3 } from "../models";

export const MoveData = {
	rotation: (model) => {
		return Vector3.findRotationById(model.id);
	},
	position: (model) => {
		return Vector3.findPositionById(model.id);
	},
}