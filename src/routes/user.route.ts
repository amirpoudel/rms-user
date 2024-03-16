import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { UserRepository } from "../repositories/user.repository";
import { UserInteractor } from "../interactors/user.interactor";

const router = Router();

const repository = new UserRepository();
const interactor = new UserInteractor(repository);


const userController = new UserController(interactor);

router.post("/create-owner", userController.createOwner);

export default router;