/** @format */
const axios = require("axios");
const { Dog, Temperaments } = require("../db.js");
const URL = "https://api.thedogapi.com/v1/breeds/";

const getId = async (id, source) => {
  if (source === "bdd") {
    const dogBd = await Dog.findByPk(id, {
      include: [
        {
          model: Temperaments,
        },
      ],
    });

    if (!dogBd) {
      throw new Error(`No se encuentra la raza con el id:${id}`);
    }

    const obj = {
      id: dogBd.id,
      name: dogBd.name,
      weight: dogBd.weight,
      image: dogBd.image,
      height: dogBd.height,
      life_span: dogBd.life_span,
      temperament: dogBd.dataValues.Temperaments.map((e) => e.name).join(", "),
    };

    return obj;
  }

  if (source === "api") {
    const { data } = await axios(`${URL}${id}`);
    const img = data.reference_image_id;
    const url = `https://cdn2.thedogapi.com/images/${img}.jpg`;
    const dogApi = {
      id: data.id,
      name: data.name,
      weight: data.weight.metric,
      height: data.height.metric,
      image: url,
      life_span: data.life_span,
      temperament: data.temperament,
    };
    if (!Object.keys(data).length) {
      throw new Error(`No se encuentra la raza con el id:${id} `);
    }
    return dogApi;
  }
};
module.exports = getId;
