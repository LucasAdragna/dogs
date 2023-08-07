/** @format */

const { Router } = require("express");
const handlerDogs = require("../handlers/handlerDogs");
const handlerTemp = require("../handlers/handlerTemp");
const getRouter = Router();

// Muestra todos los perros

getRouter.get("/", handlerDogs);
getRouter.get("/temperaments",handlerTemp);

module.exports = getRouter;
