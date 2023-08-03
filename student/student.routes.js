import express from "express";

import { student } from "./student.model.js";

const router = express.Router();

router.post("/student/create", async (req, res) => {
  const newStudent = req.body;
  await student.create(newStudent);
  return res
    .status(200)
    .send({ message: "Students details added sucessfully" });
});
router.get("/students", async (req, res) => {
  const students = await student.find();
  return res.status(200).send(students);
});

export default router;
