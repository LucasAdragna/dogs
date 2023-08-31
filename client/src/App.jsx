/** @format */

import style from "./App.module.css";
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/navBar";
import { Detail, Home, Form, Landing } from "./views";

function App() {
  const location = useLocation();
  return (
    <div className={style.App}>
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/create" element={<Form />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
