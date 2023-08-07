/** @format */

const { Dog, Temperaments } = require("../db");
const { Op } = require("sequelize");

const createDog = async (
  name,
  weight,
  height,
  image,
  life_span,
  temperaments,
  created
) => {
  const newDog = await Dog.create({
    name,
    weight,
    height,
    image,
    life_span,
    created,
  });

  for (const temperament of temperaments) {
    const tempEncontrado = await Temperaments.findOne({
      where: {
        name: {
          [Op.iLike]: temperament,
        },
      },
    });
    if (tempEncontrado) {
      await newDog.addTemperaments(tempEncontrado);
    } else {
      const nuevoTemp = await Temperaments.create({ name: temperament });
      await newDog.addTemperaments(nuevoTemp);
    }

    return newDog;
  }
};
module.exports = createDog;
