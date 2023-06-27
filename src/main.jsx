import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home/Home.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Buscador } from "./pages/Buscador/Buscador.jsx";
import { MiEquipo } from "./pages/MiEquipo/MiEquipo.jsx";
import { NotFound } from "./pages/NotFound/NotFound.jsx";
import { NavBar } from "./components/NavBar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Buscador" element={<Buscador/>} />
        <Route path="/MiEquipo" element={<MiEquipo/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
