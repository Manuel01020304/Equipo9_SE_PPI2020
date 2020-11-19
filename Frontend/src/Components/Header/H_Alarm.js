import React from "react";
import { Link } from "react-router-dom";
import Perfil from "../Images/Perfil.png";

function H_Alarm() {
  return (
    <header>
      <div class="ContenedorI">
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
export default H_Alarm;