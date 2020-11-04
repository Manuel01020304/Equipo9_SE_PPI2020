import React from "react";
import { Link } from "react-router-dom";

function H_Mome_Page() {
  return (
    <header>
      <div class="Contenedor">
        <h1 class="Nombre">EDUCATRAINNING</h1>
        <div class="Botones2">
          <Link to="/plans">
             <button type="button" className="btn btn-warning">
                PLANES 
             </button>
          </Link>{" "}
          <Link to="/alarm">
             <button type="button" className="btn btn-warning">
                ALARMA 
             </button>
          </Link>{" "}
          <Link to="/information">
             <button type="button" className="btn btn-warning">
                INFORMACIÓN 
             </button>
          </Link>{" "}
          <Link to="/profile">
             <button type="button" className="btn btn-warning">
                PERFIL 
             </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
export default H_Mome_Page;
