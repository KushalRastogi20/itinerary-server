import mongoose from "mongoose";

const daySchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
        unique: true
    },
    activities: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Activity'
    }],
    trip: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Trip',
        required: true
    }
})
const newTripSchema = new mongoose.Schema(
  {
    tripName: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
    days: [daySchema],
  },
  { timestamps: true }
);
const Trip = mongoose.model("Trip", newTripSchema);
export { Trip };