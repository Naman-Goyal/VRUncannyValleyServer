import mongoose from "mongoose";

var Schema = mongoose.Schema;

var moveDataSchema = new Schema
({
	time: Schema.Types.Date,
	test_id: Schema.Types.ObjectId
});

export const MoveData = mongoose.model("MoveDatas", moveDataSchema);