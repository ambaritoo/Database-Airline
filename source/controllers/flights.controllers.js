const Vuelo = require("../models/Vuelo");

const getFlights = async (_, res) => {
  try {
    const flights = await Vuelo.find();
    res.status(200).json({
      message: "Todo está funcionando bien",
      ok: true,
      flights,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      message: "Error interno del servidor",
    });
  }
};

const createFlight = async (req, res) => {
  try {
    const flight = new Vuelo(req.body);
    await flight.save();
    res.status(200).json({
      ok: true,
      flight,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      message: "Error interno del servidor",
    });
  }
};

const deleteFlight = async (req, res) => {
  try {
    const { id } = req.params;
    const flight = await Vuelo.findByIdAndDelete(id);
    if (!flight) {
      return res.status(404).json({
        ok: false,
        message: "No se encontró el vuelo",
      });
    }
    res.status(200).json({
      ok: true,
      message: "Vuelo eliminado correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      message: "Error interno del servidor",
    });
  }
};

module.exports = { getFlights, createFlight, deleteFlight };
