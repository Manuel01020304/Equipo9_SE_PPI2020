import React from "react";
import { Link } from "react-router-dom";

function H_Profile() {
  return (
    <header>
      <div class="Contenedor">
        <Link to="/home_page">
          <h1 class="Menu">MENÚ</h1>
        </Link>
        <div class="Titulo_Planes">PERFIL DE USUARIO</div>
        <div class="C-Sesion">
          <Link to="/">
            <h1 class="Menu2">Cerrar Sesion</h1>
          </Link>
        </div>
      </div>
    </header>
  );
}
export default H_Profile;
