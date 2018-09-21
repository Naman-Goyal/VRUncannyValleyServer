import { SingleTest as db } from "../mongoose";

const findByUser = (id) => {
	return db.find({user_id:id});
};

const create = (test) => {
  return db.create(test);
};

export const SingleTest = {
	findByUser,
	create
}