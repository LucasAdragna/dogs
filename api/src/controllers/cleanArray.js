/** @format */

// modularizamos el mapeo, para usarlo en los controllers necesarios.
const cleanArray = (arr) =>
  arr.map((ele) => {
    return {
      id: ele.id,
      name: ele.name,
      weight: ele.weight,
      height: ele.height,
      image: ele.image.url,
      life_span: ele.life_span,
      temperament: ele.temperament,
      created: false,
    };
  });

module.exports = cleanArray;
