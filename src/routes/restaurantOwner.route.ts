import {Router} from "express";

import { RestaurantOwnerController } from "../controllers/restaurantOwner.controller";
import { RestaurantOwnerRepository } from "../repositories/restaurantOwner.repository";
import { RestaurantOwnerInteractor } from "../interactors/restaurantOwner.interactor";
import { ValidationService } from "../application/services/validation.service";

const router = Router();

const repository = new RestaurantOwnerRepository();
const validate = new ValidationService();
const interactor = new RestaurantOwnerInteractor(repository,validate);

const restaurantOwnerController = new RestaurantOwnerController(interactor);

router.route("/register").post(restaurantOwnerController.createOwner);

export default router;