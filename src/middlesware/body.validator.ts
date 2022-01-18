import { Response, Request, NextFunction } from "express"
// const AppError = require("../Error/AppError");

export const useBodyValidator = (schema: any) => {
    console.log("ok validator")
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await schema
        .unknown(false)
        .validateAsync(req.body, { stripUnknown: true });
      req.body = data;
      next();
    } catch (e: any) {
      const message = e.details[0].message;
      return next(res.status(400).json({ message: e.message}));
    }
  };
};

export const useQueryValidator = (schema: any) => {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        const data = await schema
          .unknown(false)
          .validateAsync(req.body, { stripUnknown: true });
        req.body = data;
        next();
      } catch (e: any) {
        const message = e.details[0].message;
        return next(res.status(400).json({ message: e.message}));
      }
    };
  };