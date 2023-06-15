import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getTasks,
  getTask,
  createTasks,
  updateTasks,
  deleteTasks,
} from "../controllers/tasks.controller.js";

const router = Router();

//Get routes
router.get("/tasks", authRequired, getTasks);
router.get("/tasks/:id", authRequired, getTask);
//Post routes
router.post("/tasks", authRequired, createTasks);
//Delete routes
router.delete("/tasks/:id", authRequired, deleteTasks);
//Put routes
router.put("/tasks/:id", authRequired, updateTasks);

export default router;
