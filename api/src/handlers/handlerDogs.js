/** @format */
const getRazas = require("../controllers/controllersDogs");
const controllersName = require("../controllers/controllersName");

const handlerDogs = async (req, res) => {

  const { name } = req.query;

  const result = name ? await controllersName(name) : await getRazas();  // traigo por nombre, o todos los perros.

  res.status(200).json(result);
};
module.exports = handlerDogs;
