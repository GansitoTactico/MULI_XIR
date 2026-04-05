import { Router } from "express";

import { authRequired } from "../middlewares/validateToken.js";
import { GetLLMResponse } from "../controllers/GenerateResponse.js";
import { generateResponse } from "../controllers/GenerateResponse.js";
import { createChatBotResponse } from "../controllers/GenerateResponse.js";
import { GetChatBotResponse } from "../controllers/GenerateResponse.js";


const router = Router();



router.get("/getResponse", authRequired, GetLLMResponse);
router.post("/createResponse", authRequired, generateResponse);
router.post("/createChatBotResponse", authRequired, createChatBotResponse);
router.get("/getChatBotResponse", authRequired, GetChatBotResponse);

export default router;

