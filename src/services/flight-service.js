const { FlightRepository } = require("../repositories");
const flightRepository = new FlightRepository();
const AppError = require("../utils/error/app-error");
const { StatusCodes } = require("http-status-codes");

async function createFlight(data) {
  try {
    const flight = await flightRepository.create(data);
    return flight;
  } catch (error) {
    if (error.name == "SequelizeValidationError") {
      let explanations = [];
      error.errors.forEach((err) => {
        explanations.push(err.message);
      });
      throw new AppError(explanations, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Cannot create a new Flight object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}



module.exports = {
  createFlight,
};
