const express = require("express");
const handlerId = require("../handlers/handlersId");
const getRouterId = express.Router();

// Traemos por id las razas

getRouterId.get("/:id", handlerId);

module.exports = getRouterId;