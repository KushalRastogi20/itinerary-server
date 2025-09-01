import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()
// router.route("/verify").get(verifyJWT)
router.get("/verify", verifyJWT, (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
});

export default router