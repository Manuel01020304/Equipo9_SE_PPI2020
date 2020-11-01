import React from "react";
import { Link } from "react-router-dom";

function H_Main_Page() {
  return (
    <header>
      <div class="Contenedor">
        <h1 class="Nombre">EDUCATRAINNING</h1>
        <div class="Botones">
          <Link to="/sign_in">
             <button type="button" className="btn btn-warning">
                REGISTRARSE 
             </button>
          </Link>{" "}
          <Link to="/login">
             <button type="button" className="btn btn-warning">
                INICIAR SECCIÓN 
             </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
export default H_Main_Page;
