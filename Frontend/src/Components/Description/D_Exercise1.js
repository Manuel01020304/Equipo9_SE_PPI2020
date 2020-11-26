import React from "react";
import { Link } from "react-router-dom";
import Ejercicio1_1 from "../Images/Ejercicio1_1.gif"
import Ejercicio1_2 from "../Images/Ejercicio1_2.gif"
import Ejercicio1_3 from "../Images/Ejercicio1_3.gif"

function D_Exercise1() {
  return (
    <body>
      <div class="ContenedorE">
        <div class="Planes">
          <h1 class="Titulos">EJERCICIOS ABDOMEN</h1> <br />
          <div class="Exercises">
            <h2 class="T_Ejercicios">Plancha Superman</h2>
            <img src={Ejercicio1_1} alt="Ejercicio1_1" align="left" className="Ejercicio1_1" />
            <h3 class="I_Ejercicios">Series: 2-4</h3>
            <h3 class="I_Ejercicios">Duración: 1 minuto</h3> <br />
          </div>
          <div class="Exercises">
            <h2 class="T_Ejercicios">Abdominales Crunch</h2>
            <img src={Ejercicio1_2} alt="Ejercicio1_2" align="left" className="Ejercicio1_2" />
            <h3 class="I_Ejercicios">Series: 2-4</h3>
            <h3 class="I_Ejercicios">Duración: 30 repeticiones</h3> <br />
          </div>
          <div class="Exercises">
            <h2 class="T_Ejercicios">Elevacion de Piernas</h2>
            <img src={Ejercicio1_3} alt="Ejercicio1_3" align="left" className="Ejercicio1_3" />
            <h3 class="I_Ejercicios">Series: 2-4</h3>
            <h3 class="I_Ejercicios">Duración: 30 repeticiones</h3>
          </div>
        </div>
      </div>
    </body>
  );
}
export default D_Exercise1;