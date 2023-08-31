/** @format */

const { Dog, Temperaments } = require("../db");
const { Op } = require("sequelize");

const createDog = async ({
  name,
  weight,
  height,
  image,
  life_span,
  temperament,
}) => {
  const newDog = await Dog.create({
    name,
    weight,
    height,
    image,
    life_span,
  });
  console.log("temp", temperament);
  for (const temp of temperament) {
    const temperamentoEncontrado = await Temperaments.findOne({
      where: {
        name: {
          [Op.iLike]: temp,
        },
      },
    });

    if (temperamentoEncontrado) {
      await newDog.addTemperament(temperamentoEncontrado);
    } else {
      const nuevoTemperamento = await Temperaments.create({
        name: temp,
      });
      await newDog.addTemperament(nuevoTemperamento);
    }
  }

  return newDog;
};
module.exports = createDog;
