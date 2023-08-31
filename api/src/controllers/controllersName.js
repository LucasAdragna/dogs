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
  const nameTemp = nameBdd.map((dog) => {
    return {
      id: dog.id,
      name: dog.name,
      image: dog.image,
      height: dog.height,
      weight: dog.weight,
      life_span: dog.life_span,
      temperament: dog.Temperaments.map((tem) => tem.name).join(","),
    };
  });
  const result = await axios(`${URL}`);
  const filt = result.data.filter((el) =>
    el.name.toLowerCase().includes(name.toLowerCase())
  );

  const nameApi = await cleanArray(filt);
  const dogApi = nameApi.map((ele) => {
    return {
      id: ele.id,
      name: ele.name,
      weight: ele.weight,
      height: ele.height,
      image: `https://cdn2.thedogapi.com/images/${ele.image}.jpg`,
      life_span: ele.life_span,
      temperament: ele.temperament,
    };
  });

  if (!nameBdd || !nameApi) {
    throw new Error(`No se encuentra la raza con el Nombre:${name}`);
  }

  return [...dogApi, ...nameTemp];
};

module.exports = controllersName;
