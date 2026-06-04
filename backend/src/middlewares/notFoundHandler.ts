import type { NextFunction, Request, Response } from "express";
import type { AppError } from "./errorHandler.js";
import { StatusCodes } from "http-status-codes";

export const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const err = new Error(
    `Route not found: ${req.method} ${req.originalUrl}`,
  ) as AppError;
  err.status = StatusCodes.NOT_FOUND;
  err.code = "RESOURCE_NOT_FOUND";
  next(err);
};
