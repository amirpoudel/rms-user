import {Router} from "express";

import { RestaurantOwnerController } from "../controllers/restaurantOwner.controller";
import { RestaurantOwnerRepository } from "../repositories/restaurantOwner.repository";
import { RestaurantOwnerInteractor } from "../interactors/restaurantOwner.interactor";

const router = Router();

const repository = new RestaurantOwnerRepository();
const interactor = new RestaurantOwnerInteractor(repository);

const restaurantOwnerController = new RestaurantOwnerController(interactor);

router.post("/register",restaurantOwnerController.createOwner);

export default router;