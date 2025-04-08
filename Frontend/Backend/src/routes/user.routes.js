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

router.route("/signup").post(registerUser);

router.route("/login").post(loginUser);

router.route("/logout").post(verifyJWT, logOutUser);

router.route("/refreshtoken").post(refreshAccessToken);

router.route("/currentuser").get(verifyJWT, getCurrentUser);

router.route("/changepassword").post(verifyJWT, changeCurrentPassword);

router.route("/updateaccount").patch(verifyJWT, updateAccountDetails);

export default router;
