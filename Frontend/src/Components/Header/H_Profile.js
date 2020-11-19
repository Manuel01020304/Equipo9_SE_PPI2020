import React from "react";
import { Link } from "react-router-dom";

function H_Profile() {
  return (
    <header>
      <div class="Contenedor-Perfil">
        <Link to="/home_page">
          <h1 class="Menu">MENÚ</h1>
        </Link>
        <div class="C-Sesion">
          <Link to="/">
            <h1 class="Menu2">CERRAR SESION</h1>
          </Link>
        </div>
      </div>
    </header>
  );
}
export default H_Profile;
