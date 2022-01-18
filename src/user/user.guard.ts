import { Request, Response, NextFunction } from "express";

class UserGuard {
    public createUserGuard = async (req: Request, res: Response, next: NextFunction) => {
        console.log(req.body)
        res.send("Hello Server");
        next();
    };

    public loginGuard = async (req:Request, res: Response, next: NextFunction) => {
        res.send("Login guard");
        next();
    };

}

export default new UserGuard();