/** @format */

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { dogName } from "../../redux/action";
import style from "./SearchBar.module.css";

export default function SearchBar() {
  const dispatch = useDispatch();

  const [filtrar, setfiltrar] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setfiltrar(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(dogName(filtrar));
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit}>
        <input
          className={style.input}
          type="search"
          value={filtrar}
          placeholder="Escribe Aqui 🐕"
          onChange={handleChange}
        />
        <button className={style.button} type="submit">
          Buscar
        </button>
      </form>
    </div>
  );
}
