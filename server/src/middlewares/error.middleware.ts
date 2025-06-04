import { z } from "zod";
import { ErrorRequestHandler, Response } from "express";
import { INTERNAL_SERVER_ERROR, BAD_REQUEST } from "../constants/http";
import AppError from "../utils/appError";

const handleZodError = (res: Response, error: z.ZodError) => {
  const errors = error.issues.map((err) => ({
    path: err.path.join("."),
    message: err.message,
  }));
  return res.status(BAD_REQUEST).json({
    errors: errors,
    message: errors.map((err) => err.path + ": " + err.message).join(", "),
  });
};

const handleAppError = (res: Response, error: AppError) => {
    return res.status(error.statusCode).json({
        message: error.message,
    })
}

const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
    console.log(`PATH: ${req.path}`, error);

    if (error instanceof z.ZodError) {
        handleZodError(res, error);
    }
    if (error instanceof AppError) {
        handleAppError(res, error);
    }

    res.status(INTERNAL_SERVER_ERROR).json({message: "Internal Server Error"});
}

export default errorHandler;