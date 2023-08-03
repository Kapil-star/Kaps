import mongoose from "mongoose";

//schema
const studentSchema = new mongoose.Schema({
  name: String,
  location: String,
  age: Number,
  courses: Array,
});

//create table
export const student = mongoose.model("student", studentSchema);
