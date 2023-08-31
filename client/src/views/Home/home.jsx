/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dogs } from "../../redux/action";
import OrderTemperaments from "./ordenDogs";
import { CardsContainer } from "../../components/cardContainer/cardContainer";
import style from "./home.module.css";
import SearchBar from "../../components/SearchBar/searchBar";

const Home = () => {
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.dogs);

  const [cantidadesDeCards, setCantidadDeCards] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  const indexCards = currentPage * cantidadesDeCards;
  const cardsUno = indexCards - cantidadesDeCards;

  const totalPages = Math.ceil(dogs.length / cantidadesDeCards);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  useEffect(() => {
    dispatch(Dogs());
  }, [dispatch]);

  return (
    <div className={style.containerHome}>
      <SearchBar />
      <OrderTemperaments />
      <CardsContainer dogs={dogs} indexCards={indexCards} cardsUno={cardsUno} />
      <div className={style.pagination}>
        <button
          onClick={handlePrevPage}
          className={style.page}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <button
          onClick={handleNextPage}
          className={style.page}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Home;
