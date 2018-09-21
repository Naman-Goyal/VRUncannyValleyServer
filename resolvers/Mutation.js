import {MoveData, TestSubject, Vector3, SingleTest} from "../models";

export const Mutation = {
	newTestSubject: (root, args) => {
		const info = args.info;
		return TestSubject.create({
			age : info.age,
			date: Date.now()
		});
	},
	addMoveData: (root, args) => {
		const info = args.info;
		let returnValue = null;
		return MoveData.create({
			time: info.time,
			test_id: info.test_id,
		}).then((movedata) => {
			returnValue = movedata; 
			return Vector3.create({
				is_position: true,
				move_data_id: movedata._id,
				x: info.pos_x,
				y: info.pos_y,
				z: info.pos_z
			});
		}).then((vectordata) => {
			return Vector3.create({
				is_position: false,
				move_data_id: vectordata.move_data_id,
				x: info.rot_x,
				y: info.rot_y,
				z: info.rot_z
			});
		}).then(() => {
			return returnValue;
		});
	},
	initTest: (root, args) => {
		const info = args.info;
		return SingleTest.create({
			animacy: info.animacy,
			model: info.model,
			user_id: info.user_id
		});
	}
}