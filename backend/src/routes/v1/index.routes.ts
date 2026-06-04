import { Router } from "express";
import { getRoot } from "../../controllers/v1/index.controller.js";
import healthRouter from "./health.routes.js";

const router = Router();

router.get("/", getRoot);
router.use("/health", healthRouter);

export default router;
