/** @format */

import React from "react";
import style from "./navBar.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faDog } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <div>
      <ul className={style.containerNav}>
        <FontAwesomeIcon icon={faHome} className="icon" />
        <li>
          <Link className={style.Link} to="/home">
            HOME
          </Link>
        </li>
        <FontAwesomeIcon icon={faDog} className="icon" />
        <li>
          <Link className={style.linkDos} to="/create">
            CREAR DOG
          </Link>
        </li>
        <FontAwesomeIcon icon={faBars} className="icon" />
        <li>
          <Link className={style.linkTres} to="/">
            INICIO
          </Link>
        </li>
      </ul>
      <div></div>
    </div>
  );
};

export default NavBar;
