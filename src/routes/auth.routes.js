import { Router } from "express";
import {
  login,
  register,
  logout,
  profile,
} from "../controllers/auth.controller.js";
import { validateSchema } from "../middlewares/validatorMiddleware.js";

import { authRequired } from "../middlewares/validateToken.js";
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";

const router = Router();
// Post Routes
router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.post("/logout", logout);

// Get Routes
router.get("/profile", authRequired, profile);

export default router;
