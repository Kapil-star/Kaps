import express from "express";

import { dbConnect } from "./student/db_connect.js";
import studentRoutes from "./student/student.routes.js";
const app = express();
app.use(express.json());
//register routes
app.use(studentRoutes);

dbConnect();
const port = 8000;
app.listen(port, () => {
  console.log(`App is listening to port ${port}`);
});
