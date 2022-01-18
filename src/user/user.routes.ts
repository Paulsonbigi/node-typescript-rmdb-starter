import { Router } from "express";
import UserController from "./user.controller"
import { createUserValidator } from "./user.validator"
import UserGuard from "./user.guard";
import { useBodyValidator } from "../middlesware/body.validator"

const router = Router();

router.post("/register", UserController.registerUserController)

export default router