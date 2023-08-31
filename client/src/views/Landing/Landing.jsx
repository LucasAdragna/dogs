/** @format */

import React from "react";
import { Link } from "react-router-dom";
import style from "./landing.module.css";

const Landing = () => {
  return (
    <div>
      <div className={style.titulo}>¡WELCOME TO MAGIC DOGS!</div>
      <div className={style.logoContainer}>
        <div className={style.logo}>
          <img
            className={style.img}
            src="https://i.etsystatic.com/44108942/r/il/bb2f5a/5064423407/il_300x300.5064423407_je85.jpg"
            alt="Logo de perro"
          />
        </div>
        <Link className={style.linkLanding} to="/home"></Link>
      </div>
    </div>
  );
};

export default Landing;
