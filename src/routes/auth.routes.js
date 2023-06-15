import { Router } from "express";
import {
  login,
  register,
  logout,
  profile,
} from "../controllers/auth.controller.js";

import { authRequired } from "../middlewares/validateToken.js";

const router = Router();
// Post Routes
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

// Get Routes
router.get("/profile", authRequired, profile);

export default router;
