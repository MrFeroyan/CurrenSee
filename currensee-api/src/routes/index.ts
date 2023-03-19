import { Router } from "express";

import authRouter from "./auth";
import currencyRouter from "./currency";

const appRouter = Router();

// appRouter.use("/health", healthController);
appRouter.use("/auth", authRouter);
appRouter.use("/currency", currencyRouter);

export default appRouter;
