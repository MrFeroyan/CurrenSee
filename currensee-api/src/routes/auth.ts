import { Router } from "express";

import { signIn, signUp } from "@controllers/auth";
import { validationMiddleware } from "@middlewares/validation";
import { signInValidation, signUpValidation } from "@schemas/auth";

const authRouter = Router();

authRouter.post("/signUp", validationMiddleware(signUpValidation), signUp);
authRouter.post("/signIn", validationMiddleware(signInValidation), signIn);

export default authRouter;
