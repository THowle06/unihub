import type { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export interface AppError extends Error {
  status?: number;
  code?: string;
  details?: unknown;
}

function defaultCode(status: number): string {
  switch (status) {
    case StatusCodes.NOT_FOUND:
      return "RESOURCE_NOT_FOUND";
    case StatusCodes.BAD_REQUEST:
      return "BAD_REQUEST";
    case StatusCodes.UNAUTHORIZED:
      return "UNAUTHORIZED";
    case StatusCodes.FORBIDDEN:
      return "FORBIDDEN";
    case StatusCodes.CONFLICT:
      return "CONFLICT";
    case StatusCodes.UNPROCESSABLE_ENTITY:
      return "VALIDATION_ERROR";
    default:
      return "INTERNAL_SERVER_ERROR";
  }
}

export const errorHandler = (
  err: AppError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const status = err.status ?? StatusCodes.INTERNAL_SERVER_ERROR;
  const code = err.code ?? defaultCode(status);

  const isServerError = status >= 500;
  const message =
    err.message && err.message.length > 0
      ? err.message
      : isServerError
        ? "Internal server error"
        : "Request failed";

  return res.status(status).json({
    success: false,
    error: {
      code,
      message,
      ...(err.details !== undefined ? { details: err.details } : {}),
    },
  });
};
