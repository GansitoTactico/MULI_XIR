import { Router } from "express";

import { authRequired } from "../middlewares/validateToken.js";
import { generateResponse } from "../controllers/GenerateResponse.js";
import { GetLLMResponse } from "../controllers/GenerateResponse.js";

const router = Router();


router.get("/getResponse", authRequired, GetLLMResponse);
router.post("/createResponse", authRequired, generateResponse);

export default router;

