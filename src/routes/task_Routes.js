import {Router} from "express";
import {authRequired} from "../middlewares/validateToken.js";
import {getTasks,getTask,createTask,deleteTask,updateTask} from "../controllers/taskControllers.js"

import { validateSchema } from "../middlewares/validator_middlewares.js";
import {createTaskSchema} from "../schemas/task_schema.js"

const router = Router();

router.get("/task", authRequired,getTasks);

router.post("/task", authRequired,validateSchema(createTaskSchema),createTask);

router.delete("/task/:id", authRequired,deleteTask);

router.get("/task/:id", authRequired,getTask);

router.put("/task/:id", authRequired,updateTask);

export default router;
