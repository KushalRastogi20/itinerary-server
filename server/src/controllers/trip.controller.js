import { asyncHandler } from "../utils/asyncHandler.js";
import { APIError } from "../utils/APIerror.js";
// import { User } from "../models/user.model.js";
// import { uploadOnCloudinary } from "../utils/cloudinary.js";
// import { APIresponse } from "../utils/APIresponse.js";
// import jwt from "jsonwebtoken";
import { Trip } from "../models/newTrip.model.js";


const createTrip = asyncHandler(async (req, res) => {
  console.log("Create trip request received");
  const { name, startDate, endDate, destination, color, active, days,userId } = req.body;
  console.log("Request body:", req.body);
  if (!name || !color || !startDate || !endDate || !destination) {
    throw new APIError("All fields are required", 400);
  }
  // db.trips.getIndexes()

  const newTrip = {
    tripName: name,
    // description,
    startDate,
    endDate,
    destination,
    color,
    active,
    days,
    userId
  };
  console.log("New trip data:", newTrip);
  const saveTrip = await Trip.create(newTrip);
  console.log("Trip created successfully:", saveTrip);
  res.status(201).json({
    success:true,
    message:`Trip created for ${userId}`,
    data:saveTrip
  })
});

const getAllTrip = asyncHandler(async (req, res) => {
  console.log("Get all trips request received");
  //get user id from verifyjwt middleware
  const user = req.user;
  const userId = user?._id;
  console.log("User ID from middleware:", userId);
 
  if(!user?._id){
    throw new APIError("User ID is required",400);
  }
  // const trips = await Trip.find({}).sort({ createdAt: -1 });
  const trips= await Trip.find({userId}).sort({createdAt:-1});
  
  console.log("Trips retrieved successfully:", trips);
  res.status(200).json({
    success: true,
    message:"Trips fetched successfully",
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
