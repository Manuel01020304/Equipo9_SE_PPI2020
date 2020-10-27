import React from "react";
import { Link } from "react-router-dom";

function H_Mome_Page() {
  return (
    <header>
      <div class="Contenedor">
        <h1 class="Nombre">EDUCATRAINNING</h1>
        <div class="Botones">
          <button type="button" className="btn btn-warning">
            <Link to="/plans"> PLANES </Link>
          </button>{" "}
          <button type="button" className="btn btn-warning">
            <Link to="/alarm"> ALARMA </Link>
          </button>{" "}
          <button type="button" className="btn btn-warning">
            <Link to="/information"> INFORMACIÓN </Link>
          </button>{" "}
          <button type="button" className="btn btn-warning">
            <Link to="/profile"> PERFIL </Link>
          </button>
        </div>
      </div>
    </header>
  );
}
export default H_Mome_Page;
