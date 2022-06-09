const flightModel = require("../models/flights.model");

async function read(filter, proj) {
  return await flightModel.find(filter, proj);
}

async function readOne(filter, proj) {
  return await flightModel.findOne(filter, proj);
}

async function findById(id) {
  const res = await flightModel.findById(id);
  return res;
}

async function create(newFlight) {
  return await flightModel.create(newFlight);
}

async function update(id, updateFlight) {
  return await flightModel.findByIdAndUpdate(id, updateFlight);
}

async function del(id) {
  return await flightModel.delete(id);
}

module.exports = {
  read,
  readOne,
  create,
  update,
  delete: del,
  findById,
};
