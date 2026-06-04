import type { NextFunction, Request, Response } from "express";
import { getWelcome } from "../../services/index.service.js";
import { StatusCodes } from "http-status-codes";

export function getRoot(_req: Request, res: Response, next: NextFunction) {
  try {
    const payload = getWelcome();
    return res.status(StatusCodes.OK).json(payload);
  } catch (err) {
    return next(err);
  }
}
