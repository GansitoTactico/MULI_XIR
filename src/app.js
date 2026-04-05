import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";

import authroutes from "./routes/auth_routes.js";
import taskRoutes from "./routes/task_Routes.js";
import contextRoutes from "./routes/context_routes.js";
import LLM_Routes from "./routes/LLM_Routes.js";
import messageRoutes from "./routes/messageRoutes.js";
import processRoutes from "./routes/process_routes.js";
import webhookRoutes from "./routes/webhook_routes.js";
import { fileURLToPath } from 'url';
import path from "path";
import process from "process";

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registrado:', registration);
      })
      .catch(error => {
        console.error('Error registrando el Service Worker:', error);
      });
  });
}

const app = express();

app.use(cors({
    origin:  ['https://your-tunnel-url.github.dev', 'http://localhost:5173'],
    credentials: true,      // Permite el uso de cookies
}));
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

app.use("/api",authroutes);+
app.use("/api",taskRoutes);
app.use("/api",contextRoutes);
app.use("/api",LLM_Routes);
app.use("/api",messageRoutes);
app.use("/api", processRoutes);
app.use("/api", webhookRoutes);


export default app;