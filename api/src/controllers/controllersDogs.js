/** @format */

const axios = require("axios");
require("dotenv").config();
const { KEY } = process.env;
const { Dog, Temperaments } = require("../db");
const URL = "https://api.thedogapi.com/v1/breeds/?";

const getRazas = async () => {
  const dataBase = await Dog.findAll({
    include: Temperaments,
  });
  const { data } = await axios(`${URL}`);
  const dogBdd = dataBase.map((ele) => {
    return {
      id: ele.id,
      name: ele.name,
      weight: { metric: ele.weight },
      height: { metric: ele.height },
      image: ele.image,
      life_span: ele.life_span,
      temperament: ele.dataValues.Temperaments.map((e) => e.name).join(","),
    };
  });
  console.log("data", dogBdd);
  const dogApi = data.map((ele) => {
    return {
      id: ele.id,
      name: ele.name,
      weight: ele.weight,
      height: ele.height,
      image: `https://cdn2.thedogapi.com/images/${ele.reference_image_id}.jpg`,
      life_span: ele.life_span,
      temperament: ele.temperament,
    };
  });
  return [...dogApi, ...dogBdd];
};

module.exports = getRazas;
