import { Router } from "express";
import { getHealthStatus } from "../../controllers/v1/health.controller.js";

const router = Router();

router.get("/", getHealthStatus);

export default router;
