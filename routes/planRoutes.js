import express from "express";
import { requireSignIn } from "../middlewares/authMiddlewares.js";
import {
  addUserToPlanController,
  brainTreePlanPaymentController,
  createPlanController,
  deleteUserFromPlanController,
  getPlanController,
  getSinglePlanController,
  getTypeBasePlanController,
} from "../controllers/planController.js";
const router = express();

//Create-plan || Mehthod post
router.post("/create", requireSignIn, createPlanController);

//Get-plan on base of user|| Mehthod Get
router.get("/get-plans/:id", requireSignIn, getPlanController);

//get single plan
router.get("/get-plan/:id", getSinglePlanController);

//get plans on base of type || Method get
router.get("/get-type-base-plan", requireSignIn, getTypeBasePlanController);

//add user to plan || Method post
router.post("/add-user/:id", requireSignIn, addUserToPlanController);

//delete user from plan || Method post
router.post("/delete-user/:id", requireSignIn, deleteUserFromPlanController);

//payment
//token
router.post(
  "/plan-payment/:planId",
  requireSignIn,
  brainTreePlanPaymentController
);

export default router;
