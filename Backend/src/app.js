import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();


app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true, limit: "2mb" }));
app.use(express.static("files"));
app.use(cookieParser());

//router import
import userRouter from "./routes/user.routes.js";
import walletRoutes from "./routes/wallet.routes.js";

// routes
app.use("/api/v2/user", userRouter);
app.use("/api/v2/wallet", walletRoutes);

export { app };
