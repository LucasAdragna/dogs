/** @format */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./ordenDogs.module.css";
import {
  dogFilter,
  dogOrder,
  dogTemperaments,
  dogsApiBdd,
  dogsPesos,
} from "../../redux/action";

const OrderTemperaments = () => {
  const dispatch = useDispatch();
  const temperaments = useSelector((state) => state.temperamentos);

  // const [order, setOrder] = useState("");

  useEffect(() => {
    dispatch(dogTemperaments());
  }, [dispatch]);

  const handleTemperament = (e) => {
    e.preventDefault();
    const value = e.target.value;
    dispatch(dogFilter(value));
  };

  const handlerOrder = (e) => {
    e.preventDefault();
    const value = e.target.value;
    dispatch(dogOrder(value));
  };
  const handleApiBdd = (e) => {
    e.preventDefault();
    const value = e.target.value;
    dispatch(dogsApiBdd(value));
  };
  const handlerOrderPeso = (e) => {
    e.preventDefault();
    const value = e.target.value;
    dispatch(dogsPesos(value));
  };

  return (
    <div className={style.temperamentos}>
      <select className={style.temp} onChange={handleTemperament}>
        <option>
          <b>Selecciona un Temperamento</b>
        </option>
        {temperaments?.map((temperament) => (
          <option value={temperament}>{temperament}</option>
        ))}
      </select>
      <select className={style.orden} onChange={handlerOrder}>
        <option>
          <b>Name:A-D</b>
        </option>
        <option value="A">Acendente</option>
        <option value="D">Decendente</option>
      </select>
      <select className={style.apiBdd} onChange={handleApiBdd}>
        <option value="" hidden>
          <b>Orden:Api-Bdd</b>
        </option>
        <option value="API">API</option>
        <option value="BDD">BDD</option>
      </select>
      <select className={style.peso} onChange={handlerOrderPeso}>
        <option value="" hidden>
          <b>Select Weight</b>
        </option>
        <option value="MENOR">MENOR</option>
        <option value="MAYOR">MAYOR</option>
      </select>
    </div>
  );
};

export default OrderTemperaments;
