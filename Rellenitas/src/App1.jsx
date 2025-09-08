import { useState } from "react";
import "./App.css";

function App() {
  const [pagina, setPagina] = useState("inicio"); // inicio por defecto

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="navbar-title">Las mejores galletitas.</h1>
        <ul>
          <li><button onClick={() => setPagina("inicio")}>Página principal</button></li>
          <li><button onClick={() => setPagina("rellenitas")}>Rellenitas</button></li>
          <li><button onClick={() => setPagina("pedido")}>Hace tu pedido</button></li>
        </ul>
      </nav>

      {/* Contenido dinámico */}
      {pagina === "inicio" && <Inicio />}
      {pagina === "rellenitas" && <Rellenitas />}
      {pagina === "pedido" && <Pedido />}
    </div>
  );
}
export default App;
