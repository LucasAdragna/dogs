/** @format */
import {
  GET_DOGS,
  DOG_ERROR,
  DOG_ID,
  DOG_NAME,
  DOG_TEMPERAMENTS,
  DOG_ORDER,
  DOG_API_BDD,
  DOG_PESOS,
  ALL_TEMPERAMENT,
  DOG_POST,
} from ".";

const initialState = {
  dogs: [],
  copiDogs: [],
  temperamentos: [],
  filtros: [],
  newdogs: {},
  dog: [],
  error: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_DOGS:
      return { ...state, dogs: action.payload, copiDogs: action.payload };
    case DOG_ID:
      return { ...state, newdogs: action.payload };
    case DOG_ERROR:
      return { ...state, error: action.payload };
    case DOG_NAME:
      if (state.dogs.name !== action.payload) {
        alert("No exite un perro con el siguiente nombre");
      }
      return { ...state, dogs: action.payload };
    case ALL_TEMPERAMENT:
      return {
        ...state,
        temperamentos: action.payload,
      };
    case DOG_TEMPERAMENTS:
      let temp;
      state.filtros.length ? (temp = state.filtros) : (temp = state.copiDogs);
      temp = state.copiDogs.filter(
        (dog) => dog.temperament && dog.temperament.includes(action.payload)
      );

      if (action.payload === "Selecciona un Temperamento") {
        temp = state.copiDogs;
        return {
          ...state,
          dogs: [...temp],
          filtros: [...temp],
        };
      }
      return {
        ...state,
        dogs: [...temp],
        filtros: [...temp],
      };

    case DOG_ORDER:
      let copy;
      state.filtros.length ? (copy = state.filtros) : (copy = state.copiDogs);
      action.payload === "A"
        ? (copy = copy.sort(
            (a, b) =>
              a.name?.toUpperCase().charCodeAt(0) -
              b.name?.toUpperCase().charCodeAt(0)
          ))
        : (copy = copy.sort(
            (a, b) =>
              b.name?.toUpperCase().charCodeAt(0) -
              a.name?.toUpperCase().charCodeAt(0)
          ));
      return {
        ...state,
        dogs: [...copy],
      };

    case DOG_API_BDD:
      let copia;

      state.filtros.length ? (copia = state.filtros) : (copia = state.copiDogs);

      if (action.payload === "API") {
        copia = copia.filter((dog) => typeof dog.id === "number");
      } else {
        copia = copia.filter((dog) => typeof dog.id === "string");
      }
      return {
        ...state,
        dogs: [...copia],
      };
    case DOG_PESOS:
      let copi;
      state.filtros.length ? (copi = state.filtros) : (copi = state.copiDogs);
      const perrosWeigth =
        action.payload === "MENOR"
          ? copi.sort(
              (a, b) =>
                a.weight.metric?.split(" ")[0] - b.weight.metric?.split(" ")[0]
            )
          : copi.sort(
              (a, b) =>
                b.weight.metric?.split(" ")[0] - a.weight.metric?.split(" ")[0]
            );
      return {
        ...state,
        dogs: [...perrosWeigth],
      };
    case DOG_POST:
      return {
        ...state,
        dog: action.payload,
      };
    default:
      return { ...state };
  }
}
export default reducer;
