import { Router } from "express";
import { getRoot } from "../../controllers/v1/index.controller.js";

const router = Router();

router.get("/", getRoot);

export default router;
