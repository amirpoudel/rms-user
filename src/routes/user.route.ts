import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { UserRepository } from "../repositories/user.repository";
import { UserInteractor } from "../interactors/user.interactor";
import { AuthService } from "../application/services/auth.service";

const router = Router();

const repository = new UserRepository();
const auth = new AuthService();
const interactor = new UserInteractor(repository,auth);
const controller = new UserController(interactor);

router.route("/login").post(controller.loginUser);

export default router;