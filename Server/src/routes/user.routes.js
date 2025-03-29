import { Router } from "express";
import {
  changeCurrentPassword,
  getCurrentUser,
  loginUser,
  logOutUser,
  refreshAccessToken,
  registerUser,
  updateAccountDetails,
} from "../controllers/Users.controllers.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/logout").post(verifyJWT, logOutUser);

router.route("/refresh-token").post(refreshAccessToken);

router.route("/current-user").post(verifyJWT, getCurrentUser);

router.route("/change-password").post(verifyJWT, changeCurrentPassword);

router.route("/update-account").post(verifyJWT, updateAccountDetails);

export default router;
