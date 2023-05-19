const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/error/app-error");

function validateCreateRequest(req, res, next) {
  if (
    !req.body.flightNumber ||
    !req.body.airplaneId ||
    !req.body.departureAirportId ||
    !req.body.arrivalAirportId ||
    !req.body.arrivalTime ||
    !req.body.departureTime ||
    !req.body.price ||
    !req.body.totalSeats
  ) {
    responseErrors = [];

    if (!req.body.flightNumber) {
      responseErrors.push("flightNumber not found in the request body");
    }
    if (!req.body.airplaneId) {
      responseErrors.push("airplaneId not found in the request body");
    }
    if (!req.body.departureAirportId) {
      responseErrors.push("departureAirportId not found in the request body");
    }
    if (!req.body.arrivalAirportId) {
      responseErrors.push("arrivalAirportId not found in the request body");
    }
    if (!req.body.arrivalTime) {
      responseErrors.push("arrivalTime not found in the request body");
    }
    if (!req.body.departureTime) {
      responseErrors.push("departureTime not found in the request body");
    }
    if (!req.body.price) {
      responseErrors.push("price not found in the request body");
    }
    if (!req.body.totalSeats) {
      responseErrors.push("totalSeats not found in the request body");
    }

    ErrorResponse.message =
      "Something went wrong while creating flight, validation failed !";
    ErrorResponse.error = new AppError(responseErrors, StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  next();
  
}

function validateUpdateRequest(req, res, next) {
  if (!req.body.boardingGate) {
    ErrorResponse.message = "Something went wrong while updating flight";
    ErrorResponse.error = new AppError(
      "Couldn't find valid field to update in request body !",
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

module.exports = { validateCreateRequest, validateUpdateRequest };
