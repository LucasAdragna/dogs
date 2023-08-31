/** @format */

export const validate = (state) => {
  const error = {};

  if (/\d/.test(`${state.nombre}`)) {
    error.nombre = "El nombre no puede contener números";
  }
  if (state.nombre.length > 25) {
    error.nombre = "El nombre no puede tener mas de 25 caracteres";
  }
  if (state.nombre.length === 0) {
    error.nombre = "Todos los campos deben estar completos";
  }
  if (state.alturaMax.length === 0) {
    error.alturaMax = "Todos los campos deben estar completos";
  }
  if (state.image.length === 0) {
    error.image = "Todos los campos deben estar completos";
  }
  if (state.alturaMin.length === 0) {
    error.alturaMin = "Todos los campos deben estar completos";
  }
  if (state.pesoMax.length === 0) {
    error.pesoMax = "Todos los campos deben estar completos";
  }
  if (state.pesoMin.length === 0) {
    error.pesoMin = "Todos los campos deben estar completos";
  }
  if (state.alturaMin < 0) {
    error.alturaMin = "No puede ser un número negativo";
  }
  if (state.alturaMax < 0) {
    error.alturaMax = "No puede ser un número negativo";
  }
  if (state.pesoMin < 0) {
    error.pesoMin = "No puede ser un número negativo";
  }
  if (state.pesoMax < 0) {
    error.pesoMax = "No puede ser un número negativo";
  }
  if (state.alturaMin > state.alturaMax) {
    error.alturaMin =
      "La altura minima no puede ser mayor que la altura maxima";
  }
  if (state.alturaMax < state.alturaMin) {
    error.alturaMax =
      "La altura maxima no puede ser menor que la altura minima";
  }
  if (state.pesoMin > state.pesoMax) {
    error.pesoMin = "El peso minimo no puede ser mayor que maximo";
  }
  if (state.pesoMax < state.pesoMin) {
    error.pesoMax = "El peso maximo no puede ser menor que el minimo";
  }
  if (state.añosdeVida.length === 0) {
    error.añosdeVida = "Todos los campos deben estar completos";
  }
  if (state.añosdeVida > 25) {
    error.añosdeVida = "Deberia estar sin vida";
  }
  if (state.añosdeVida < 0) {
    error.añosdeVida = "No puede ser un número negativo";
  }
  return error;
};
