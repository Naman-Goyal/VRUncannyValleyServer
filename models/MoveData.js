import { MoveData as db } from "../mongoose";

const findByTest = (id) => {
	return db.find({test_id:id});
};

const create = (data) => {
  return db.create(data);
};

export const MoveData = {
	findByTest,
	create
}