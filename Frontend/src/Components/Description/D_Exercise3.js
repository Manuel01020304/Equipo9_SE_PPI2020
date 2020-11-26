import React from "react";
import { Link } from "react-router-dom";
import Ejercicio3_1 from "../Images/Ejercicio3_1.gif"
import Ejercicio3_2 from "../Images/Ejercicio3_2.gif"
import Ejercicio3_3 from "../Images/Ejercicio3_3.jpg"

function D_Exercise3() {
  return (
    <body>
      <div class="ContenedorE">
        <div class="Planes">
          <h1 class="Titulos">EJERCICIOS PIERNAS</h1> <br />
          <div class="Exercises">
            <h2 class="T_Ejercicios">Sentadillas con Salto</h2>
            <img src={Ejercicio3_1} alt="Ejercicio3_1" align="left" className="Ejercicio3_1" />
            <h3 class="I_Ejercicios">Series: 5-10</h3>
            <h3 class="I_Ejercicios">Duración: 10-20 repeticiones</h3> <br />
          </div>
          <div class="Exercises">
            <h2 class="T_Ejercicios">Zancadas Alternas</h2>
            <img src={Ejercicio3_2} alt="Ejercicio3_2" align="left" className="Ejercicio3_2" />
            <h3 class="I_Ejercicios">Series: 5-10</h3>
            <h3 class="I_Ejercicios">Duración: 10-20 repeticiones</h3> <br />
          </div>
          <div class="Exercises">
            <h2 class="T_Ejercicios">Step-Up Alterno</h2>
            <img src={Ejercicio3_3} alt="Ejercicio3_3" align="left" className="Ejercicio3_3" />
            <h3 class="I_Ejercicios">Series: 5-10</h3>
            <h3 class="I_Ejercicios">Duración: 10-20 repeticiones</h3>
          </div>
        </div>
      </div>
    </body>
  );
}
export default D_Exercise3;