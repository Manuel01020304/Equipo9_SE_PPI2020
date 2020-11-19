import React from "react";
import { Link } from "react-router-dom";
import Perfil from "../Images/Perfil.png";

function D_Profile() {
  return (
    <header>
      <div class="contenedor-P">
        <h1 class="Titulos">PERFIL DE USUARIO</h1>
        <div class="C-Perfil3">
          <img src={Perfil} alt="Perfil" className="Perfil" />
        </div>
      </div>
    </header>
  );
}
export default D_Profile;
