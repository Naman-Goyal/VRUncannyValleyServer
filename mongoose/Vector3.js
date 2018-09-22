import  mongoose from 'mongoose';

var Schema = mongoose.Schema;

var vectorSchema = new Schema
({
	is_position: Boolean,
	is_model: Boolean,
	move_data_id: Schema.Types.ObjectId,
	x: Number,
	y: Number,
	z: Number
});

export const Vector3 = mongoose.model("Vector3s", vectorSchema);