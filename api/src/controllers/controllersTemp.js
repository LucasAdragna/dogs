/** @format */

const { Temperaments } = require("../db");
const axios = require("axios");
const URL = "https://api.thedogapi.com/v1/breeds/";

const controllersTemp = async () => {
  const api = (await axios(`${URL}`)).data; //traemos los temp de la Api

  const temperamentos = [];

  api.forEach((te) => {
    const temperaments = te.temperament?.split(", ");
    if (temperaments) {
      // recorremos los temp de la api y dividimos el obj de tipo String en un array, separandolos en subcadenas.
      temperamentos.push(temperaments);
    }
  });

  let temperamentos2 = temperamentos.flat(); //creamos una nueva matriz con todos los temp del sub-array concatenados recursivamente hasta la profundidad, para no tener temp repetidos.
  let obj = {}; //Este obj se utilizará para almacenar los elementos de temperamentos2como claves y el número de ocurrencias como valores.
  for (const element of temperamentos2) {
    //bucle del array de tempr2 para iterar sobre cada elemento y se almacene en la variable element.
    if (!obj[element]) {
      //En cada iteración verificamos que element no exista en el obj.
      obj[element] = 1; //si element no estaba en el obj, se agrega su valor y se inicializa en la posición 1.
    } else {
      obj[element]++; //si el valor ya estaba, se icrementa en uno para contar una nueva posición.
    }
  }

  let arr = Object.keys(obj); //creamos un nuevo array con elementos unicos sin repetirse del array de temperamentos.

  if (arr) {
    for (const temp of arr) {
      await Temperaments.findOrCreate({
        where: { name: temp },
      });
    }
  }
  return arr;
};

module.exports = controllersTemp;
