import  mongoose from 'mongoose';

var Schema = mongoose.Schema;

var subjectSchema = new Schema
({
	age: Number,
	date: Schema.Types.Date,
});

export const TestSubject = mongoose.model("TestSubjects", subjectSchema); 