import {Router} from "express";

import { RestaurantOwnerController } from "../controllers/restaurantOwner.controller";
import { RestaurantOwnerRepository } from "../repositories/restaurantOwner.repository";
import { RestaurantOwnerInteractor } from "../interactors/restaurantOwner.interactor";
import { ValidationService } from "../application/services/validation.service";
import { AuthService } from "../application/services/auth.service";

const router = Router();

const repository = new RestaurantOwnerRepository();
const validate = new ValidationService();
const auth = new AuthService();
const interactor = new RestaurantOwnerInteractor(repository,validate,auth);

const restaurantOwnerController = new RestaurantOwnerController(interactor);

router.route("/register").post(restaurantOwnerController.createOwner);

export default router;