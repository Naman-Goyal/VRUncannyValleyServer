import { Vector3 } from "../models";

export const MoveData = {
	user_rotation: (model) => {
		return Vector3.findPlayerRotationById(model.id);
	},
	user_position: (model) => {
		return Vector3.findPlayerPositionById(model.id);
	},
	model_rotation: (model) => {
		return Vector3.findModelRotationById(model.id);
	},
	model_position: (model) => {
		return Vector3.findModelPositionById(model.id);
	},
}