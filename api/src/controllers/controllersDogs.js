/** @format */

const axios = require("axios");
require("dotenv").config();
const { KEY } = process.env;
const cleanArray = require("../controllers/cleanArray");
const { Dog } = require("../db");
const URL = "https://api.thedogapi.com/v1/breeds/?";

const getRazas = async () => {
  const dataBase = await Dog.findAll();
  const {data} = (await axios(`${URL}${KEY}`));
  const dataDogs = cleanArray(data);
  return [...dataBase, ...dataDogs];
};

module.exports = getRazas;
