const { Schema, model } = require("mongoose");

const VueloSchema = new Schema({
  flightNumber: {
    type: String,
    required: [true, "El número de vuelo es obligatorio"],
  },
  departureAirport: {
    type: String,
    required: [true, "El aeropuerto de salida es obligatorio"],
  },
  destinationAirport: {
    type: String,
    required: [true, "El aeropuerto de destino es obligatorio"],
  },
  departureTime: {
    type: Date,
    required: [true, "La hora de salida es obligatoria"],
  },
  arrivalTime: {
    type: Date,
    required: [true, "La hora de llegada es obligatoria"],
  },
});

module.exports = model("Vuelo", VueloSchema);
