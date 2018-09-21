import { Vector3 as db } from "../mongoose";


const findRotationById = (id) => {
	return db.findOne({is_position:false, move_data_id:id});
};

const findPositionById = (id) => {
	return db.findOne({is_position:true, move_data_id:id});
};

const create = (vector) => {
  return db.create(vector);
};

export const Vector3 = {
	findRotationById,
	findPositionById,
	create
}
