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
        <h2 class="I_Perfil">Nombre:</h2> <br />
        <h2 class="I_Perfil">Correo:</h2> <br />
        <h2 class="I_Perfil">Contacto:</h2> <br />
        <h2 class="I_Perfil">Planes Realizados:</h2> <br />
      </div>
    </header>
  );
}
export default D_Profile;
