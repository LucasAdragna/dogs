/** @format */

const axios = require("axios");
const { Dog, Temperaments } = require("../db");
const cleanArray = require("../controllers/cleanArray");
const URL = "https://api.thedogapi.com/v1/breeds/";
const { Op } = require("sequelize");

const controllersName = async (name) => {
  const nameBdd = await Dog.findAll({
    where: {
      name: {
        [Op.iLike]: `${name}`,
      },
    },
    include: [
      {
        model: Temperaments,
      },
    ],
  });
  const result = await axios(`${URL}`);
  const filt = result.data.filter((el) =>
    el.name.toLowerCase().includes(name.toLowerCase())
  );
  const nameApi = await cleanArray(filt);

  if (!nameBdd || !nameApi) {
    throw new Error(`No se encuentra la raza con el Nombre:${name}`);
  }

  return [...nameApi, ...nameBdd];
};

module.exports = controllersName;
