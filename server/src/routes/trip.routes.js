import express from "express";
// import { upload } from "../middlewares/multer.middleware.js";
// import { verifyJWT } from "../middlewares/auth.middleware.js";
import { createTrip, getAllTrip } from "../controllers/trip.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = express.Router()

router.post("/create", createTrip);
router.get("/allTrips",verifyJWT, getAllTrip); // Assuming you want to use the same controller for demonstration
export default router;