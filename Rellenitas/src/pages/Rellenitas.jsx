import React from "react";
import "./Rellenitas.css";

function Rellenitas() {
  return (
    <div className="galletitas-container">
      <h1 className="titulo">Galletitas Rellenitas</h1>

      <div className="galletitas-grid">
        <div className="galletita">
          <img src="/chocolate.jpg" alt="Chocolate" />
          <p>Rellenita de Chocolate</p>
        </div>

        <div className="galletita">
          <img src="/avena.jpg" alt="Avena" />
          <p>Rellenita de Avena</p>
        </div>

        <div className="galletita">
          <img src="/fruta.jpg" alt="Fruta" />
          <p>Rellenita de Fruta</p>
        </div>

        <div className="galletita">
          <img src="/oreo.jpg" alt="Oreo" />
          <p>Rellenita de Oreo</p>
        </div>

        <div className="galletita">
          <img src="/vainilla.jpg" alt="Vainilla" />
          <p>Rellenita de Vainilla</p>
        </div>
      </div>
    </div>
  );
}

export default Rellenitas;


