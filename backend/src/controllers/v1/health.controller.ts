import type { NextFunction, Request, Response } from "express";
import { getHealth } from "../../services/health.service.js";
import { StatusCodes } from "http-status-codes";

export function getHealthStatus(
  _req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
    const payload = getHealth();
    return res.status(StatusCodes.OK).json(payload);
  } catch (err) {
    return next(err);
  }
}
