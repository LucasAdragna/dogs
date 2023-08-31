/** @format */

import axios from "axios";
import {
  DOG_NAME,
  GET_DOGS,
  DOG_ERROR,
  DOG_ID,
  DOG_TEMPERAMENTS,
  DOG_ORDER,
  DOG_API_BDD,
  DOG_PESOS,
  ALL_TEMPERAMENT,
  DOG_POST,
} from ".";

export const Dogs = () => {
  return async function (dispatch) {
    const dogApi = await axios.get("http://localhost:3001/dogs");
    const dogs = dogApi.data;
    dispatch({ type: GET_DOGS, payload: dogs });
  };
};

export const DogsError = (error) => {
  return { type: DOG_ERROR, payload: error };
};

export const dogName = (name) => {
  return async function (dispatch) {
    const dogApi = await axios.get(`http://localhost:3001/dogs?name=${name}`);
    const dogs = dogApi.data;
    if (!dogs) {
      alert("No se encontro la data deceada");
    }
    dispatch({ type: DOG_NAME, payload: dogs });
  };
};

export const dogsId = (id) => {
  return async function (dispatch) {
    const dogId = await axios.get(`http://localhost:3001/${id}`);
    console.log("dogId", dogId.data);
    dispatch({ type: DOG_ID, payload: dogId.data });
  };
};

export const dogTemperaments = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/dogs/temperaments");
    dispatch({ type: ALL_TEMPERAMENT, payload: response.data });
  };
};
export const dogFilter = (temperamentos) => {
  return {
    type: DOG_TEMPERAMENTS,
    payload: temperamentos,
  };
};

export const dogOrder = (order) => {
  return {
    type: DOG_ORDER,
    payload: order,
  };
};
export const dogsApiBdd = (apiBdd) => {
  return {
    type: DOG_API_BDD,
    payload: apiBdd,
  };
};
export const dogsPesos = (pesos) => {
  return {
    type: DOG_PESOS,
    payload: pesos,
  };
};

export const dogPost = (dog) => {
  const perroCreado = {
    name: dog.nombre,
    weight: `${dog.pesoMin}-${dog.pesoMax}`,
    height: `${dog.alturaMin}-${dog.alturaMax}`,
    image: dog.image,
    life_span: dog.añosdeVida,
    temperament: dog.temperament,
  };

  return async (dispatch) => {
    const response = await axios.post(
      "http://localhost:3001/dogs",
      perroCreado
    );
    dispatch({ type: DOG_POST, payload: response.data });
  };
};
