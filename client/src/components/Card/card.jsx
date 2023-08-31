/** @format */

import React from "react";
import { Link } from "react-router-dom";
import style from "./card.module.css";

const Card = ({ dog }) => {
  return (
    <div className={style.card}>
      <h1 className={style.h1}>Nombre: {dog.name}</h1>
      <img className={style.img} src={dog.image}></img>
      <p className={style.p}>
        Temperamentos: {dog.temperament || dog.Temperaments}
      </p>
      <p className={style.p}>Altura: {dog.height.metric || dog.height}</p>
      <p className={style.p}>Peso: {dog.weight.metric || dog.weight}</p>
      <Link to={`/detail/${dog.id}`}>
        <p>Ver Mas...</p>
      </Link>
    </div>
  );
};

export default Card;
