import { Router } from "express";

import { register, login, log_out,profile,verify } from "../controllers/auth_controllers.js";
import { authRequired } from "../middlewares/validateToken.js";
const router = Router();
import { validateSchema } from "../middlewares/validator_middlewares.js";
import { register_schema, login_schema } from "../schemas/auth_schema.js";


router.post("/register", validateSchema(register_schema) , register);

router.post("/login", validateSchema(login_schema) , login);

router.post("/log_out", log_out);

router.get("/profile", authRequired , profile);

router.get("/verify", verify);

export default router;
