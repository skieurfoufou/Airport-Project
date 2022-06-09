const express = require("express");
const router = express.Router();
const flightLogic = require("../buisness-logic/flights.logic");

router.get("/", async (req, res) => {
  const { q, name } = req.query;
  try {
    const flightsRes = await flightLogic.getAllFlights({ query: q, name });
    res.send(flightsRes);
  } catch (err) {
    res.status(err.status || 500).send({ errors: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const flightRes = await flightLogic.getOneFlight(id);
    res.send(flightRes);
  } catch (err) {
    res.status(err.status || 500).send({ errors: err.message });
  }
});

module.exports = router;
