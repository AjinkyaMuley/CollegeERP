import { Router } from "express";
import { getAllStudents, getStudentStats } from "../controllers/studentControllers.js";

const studentRoutes = Router();

studentRoutes.get('/get-all-students',getAllStudents);
studentRoutes.get('/get-student-stats',getStudentStats);

export default studentRoutes