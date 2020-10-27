import React from "react";
import { Link } from "react-router-dom";

function H_Main_Page() {
  return (
    <header>
      <div class="Contenedor">
        <h1 class="Nombre">EDUCATRAINNING</h1>
        <div class="Botones">
          <button type="button" className="btn btn-warning">
            <Link to="/sign_in"> REGISTRARSE </Link>
          </button>{" "}
          <button type="button" className="btn btn-warning">
            <Link to="/login"> INICIAR SECCIÓN </Link>
          </button>
        </div>
      </div>
    </header>
  );
}
export default H_Main_Page;
