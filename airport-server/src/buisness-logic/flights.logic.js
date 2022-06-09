const { isValidObjectId } = require("mongoose");
const flights = require("../data-layer/controllers/flights.controller");
const BadRequestError = require("../utils/errors/BadRequestError");
const NotFoundError = require("../utils/errors/NotFoundError");

const getAllFlights = async (queries) => {
  const { query, name } = queries;
  let filter = {};
  if (name) {
    filter = {
      name: name,
    };
  } else if (query) {
    filter = {
      $or: [
        { name: { $regex: query, $options: "i" } },
        { cityDeparture: { $regex: query, $options: "i" } },
        { cityArrival: { $regex: query, $options: "i" } },
      ],
    };
  }
  const allFlights = await flights.read(filter);
  if (allFlights.length === 0) {
    throw new NotFoundError("no flights found!");
  }
  return allFlights;
};

const getOneFlight = async (id) => {
  if (!isValidObjectId(id)) {
    throw new BadRequestError(`id is not valid ObjectId`);
  }

  const res = await flights.findById(id);
  if (!res) {
    throw new NotFoundError(`no flight found with id ${id}!`);
  }
  return res;
};

module.exports = { getAllFlights, getOneFlight };
