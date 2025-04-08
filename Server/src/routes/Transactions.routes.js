import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { getTransactionHistory, sendMoney } from "../controllers/Transactions.controllers.js";

const router = Router();

router.route("/send").post(verifyJWT, sendMoney);
router.route("/history").get(verifyJWT, getTransactionHistory); // Assuming you have this function

export default router;
