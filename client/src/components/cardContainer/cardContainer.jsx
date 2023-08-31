/** @format */
import React from "react";
import style from "./cardContainer.module.css";
import Card from "../Card/card";

export const CardsContainer = ({ dogs, indexCards, cardsUno }) => {
  return (
    <div className={style.cardsContainer}>
      {dogs
        ?.map((dog) => {
          return <Card dog={dog} key={dog.id} />;
        })
        .slice(cardsUno, indexCards)}
    </div>
  );
};
