const { Router } = require("express");
const {
  getFlights,
  createFlight,
  deleteFlight,
} = require("../controllers/vuelos.controllers");

const router = Router();

router.get("/vuelos", getFlights);
router.post("/vuelos", createFlight);
router.delete("/vuelos/:id", deleteFlight);

module.exports = router;
