import mongoose from "mongoose";

var Schema = mongoose.Schema;

var testSchema = new Schema
({
	animacy: Number,
	model: Number,
	user_id: Schema.Types.ObjectId
});

export const SingleTest = mongoose.model("SingleTests", testSchema);