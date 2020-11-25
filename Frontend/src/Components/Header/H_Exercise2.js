import React from "react";
import { Link } from "react-router-dom";
import Perfil from "../Images/Perfil.png";

function H_Exercise2() {
  return (
    <header>
      <div class="ContenedorI">
        <Link to="/plans">
           <h1 class="Menu">ATRÁS</h1>
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
export default H_Exercise2;