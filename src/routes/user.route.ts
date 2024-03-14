import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const router = Router();

const userController = new UserController();

router.post("/create-owner", userController.createOwner);

export default router;