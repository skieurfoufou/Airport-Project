const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cityDeparture: { type: String, required: true },
  cityArrival: { type: String, required: true },
  dayOfFlight: { type: Array, required: true },
  hourDeparture: { type: String, required: true },
  hourArrival: { type: String, required: true },
  onTime: { type: Boolean, required: true },
  durationFlight: { type: Number, required: true },
  planeType: { type: String, required: true },
  passengersNumber: { type: Number, required: true },
});

module.exports = mongoose.model("flight", flightSchema);
