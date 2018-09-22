import { Vector3 as db } from "../mongoose";


const findPlayerRotationById = (id) => {
	return db.findOne({is_position:false, is_model:false, move_data_id:id});
};

const findPlayerPositionById = (id) => {
	return db.findOne({is_position:true, is_model:false, move_data_id:id});
};

const findModelRotationById = (id) => {
	return db.findOne({is_position:false, is_model:true, move_data_id:id});
};

const findModelPositionById = (id) => {
	return db.findOne({is_position:true, is_model:true, move_data_id:id});
};

const create = (vector) => {
  return db.create(vector);
};

export const Vector3 = {
	findPlayerRotationById,
	findPlayerPositionById,
	findModelRotationById,
	findModelPositionById,
	create
}
