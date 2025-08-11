import { asyncHandler } from "../utils/asyncHandler.js";
import { APIError } from "../utils/APIerror.js";
// import { User } from "../models/user.model.js";
// import { uploadOnCloudinary } from "../utils/cloudinary.js";
// import { APIresponse } from "../utils/APIresponse.js";
// import jwt from "jsonwebtoken";
import { Trip } from "../models/newTrip.model.js";


const createTrip = asyncHandler(async (req, res) => {
  console.log("Create trip request received");
  const { name, startDate, endDate, destination, color, active, days } = req.body;
  console.log("Request body:", req.body);
  if (!name || !color || !startDate || !endDate || !destination) {
    throw new APIError("All fields are required", 400);
  }
  const newTrip = {
    tripName: name,
    // description,
    startDate,
    endDate,
    destination,
    color,
    active,
    days
    // user: req.user._id,
  };
  console.log("New trip data:", newTrip);
  const saveTrip = await Trip.create(newTrip);
  console.log("Trip created successfully:", saveTrip);
});

const getAllTrip = asyncHandler(async (req, res) => {
  console.log("Get all trips request received");
  const trips = await Trip.find({}).sort({ createdAt: -1 });
  console.log("Trips retrieved successfully:", trips);
  res.status(200).json({
    success: true,
    data: trips,
  });
  // res.status(201).json({
  //   success: true,
  //   message: "Trip created successfully",
  //   data: trips,
  // });
})

const createNewDay = asyncHandler(async (req, res) => {
  console.log("create new day called")
  const { name, date, activities } = req.body;
  if (!name || !date || !activities) {
    throw new APIError("all fields are required", 400);

  }
  // const newDay= 
})

export { createTrip, getAllTrip };
