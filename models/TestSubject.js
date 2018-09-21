import { TestSubject as db } from "../mongoose";


const findAll = () => {
	return db.find();
};

const create = (subject) => {
  return db.create(subject);
};

export const TestSubject = {
	findAll,
	create
}