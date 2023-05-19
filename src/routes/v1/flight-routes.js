const express = require("express");
const { FlightController } = require("../../controllers");
const { FlightMiddleware } = require("../../middlewares");
const router = express.Router();

router.post(
  "/",
  FlightMiddleware.validateCreateRequest,
  FlightController.createFlight
);

// router.get("/", FlightController.getFlights);

// router.get("/:id", FlightController.getFlight);

// router.delete("/:id", FlightController.destroyFlight);

// router.patch(
//   "/:id",
//   FlightMiddleware.validateUpdateRequest,
//   FlightController.updateFlight
// );

module.exports = router;
