import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import authroutes from "./routes/auth_routes.js";
import taskRoutes from "./routes/task_Routes.js";
import contextRoutes from "./routes/context_routes.js";

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,      // Permite el uso de cookies
}));
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

app.use("/api",authroutes);
app.use("/api",taskRoutes);
app.use("/api",contextRoutes);

export default app;