import { Router } from "express";
import { postContext,getContext } from "../controllers/context_controllers.js";
import {authRequired} from "../middlewares/validateToken.js";

const router = Router();

router.post("/user/context",authRequired,postContext);

router.get("/user/context",authRequired,getContext);

export default router;