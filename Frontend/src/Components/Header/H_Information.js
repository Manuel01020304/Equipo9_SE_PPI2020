import React from "react";
import { Link } from "react-router-dom";
import Perfil from "../Images/Perfil.png";

function H_Information() {
  return (
    <header>
      <div class="Contenedor">
        <Link to="/home_page">
           <h1 class="Menu">MENÚ</h1>
        </Link>
        <div class="C-Perfil2">
          <Link to="/profile">
            <img src={Perfil} alt="Perfil" className="Perfil" />
          </Link>
        </div>
      </div>
    </header>
  );
}
export default H_Information;