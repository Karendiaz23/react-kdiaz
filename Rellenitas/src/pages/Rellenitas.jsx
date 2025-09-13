import React from "react";
import { Link } from "react-router-dom";
import chocolate from "../assets/chocolate.jpeg";
import avena from "../assets/avena.jpeg";
import fruta from "../assets/fruta.jpeg";
import oreo from "../assets/oreo.jpeg";
import vainilla from "../assets/vainilla.jpeg";
import "./Rellenitas.css";

export default function Rellenitas() {
  return (
    <div className="galletitas-container">
      <h1 className="titulo">🍪 Nuestras Cookies</h1>

      <div className="galletitas-grid">
        <div className="galletita">
          <img src={chocolate} alt="Chocolate" />
          <p>Cookie de Chocolate</p>
        </div>
        <div className="galletita">
          <img src={avena} alt="Avena" />
          <p>Cookie de Avena</p>
        </div>
        <div className="galletita">
          <img src={fruta} alt="Fruta" />
          <p>Cookie de Fruta</p>
        </div>
        <div className="galletita">
          <img src={vainilla} alt="Vainilla" />
          <p>Cookie de Vainilla</p>
        </div>
        <div className="galletita">
          <img src={oreo} alt="Oreo" />
          <p>Cookie de Oreo</p>
        </div>
      </div>

      {/* 👇 Botón para ir a la página de descripciones */}
      <div className="ver-descripciones">
        <Link to="/descripciones">👉 Ver descripciones</Link>
      </div>
    </div>
  );
}