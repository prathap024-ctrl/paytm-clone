import express from "express";

import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  addMoneyToWallet,
  getTransactionsHistory,
  getWalletBalance,
  sendMoney,
} from "../controllers/wallet.controllers.js";

const router = express.Router();

router.route("/addmoney").post(verifyJWT, addMoneyToWallet);
router.route("/balance").get(verifyJWT, getWalletBalance);
router.route("/send").post(verifyJWT, sendMoney);
router.route("/history").get(verifyJWT, getTransactionsHistory);

export default router;
