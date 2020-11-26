import React from "react";
import { Link } from "react-router-dom";
import Ejercicio2_1 from "../Images/Ejercicio2_1.gif"
import Ejercicio2_2 from "../Images/Ejercicio2_2.jpg"
import Ejercicio2_3 from "../Images/Ejercicio2_3.jpg"

function D_Exercise2() {
  return (
    <body>
      <div class="ContenedorE">
        <div class="Planes">
          <h1 class="Titulos">EJERCICIOS PECHO</h1> <br />
          <div class="Exercises">
            <h2 class="T_Ejercicios">Flexiones</h2>
            <img src={Ejercicio2_1} alt="Ejercicio2_1" align="left" className="Ejercicio2_1" />
            <h3 class="I_Ejercicios">Series: 5-10</h3>
            <h3 class="I_Ejercicios">Duración: 10 repeticiones</h3> <br />
          </div>
          <div class="Exercises">
            <h2 class="T_Ejercicios">Apertura de Mancuernas</h2>
            <img src={Ejercicio2_2} alt="Ejercicio2_2" align="left" className="Ejercicio2_2" />
            <h3 class="I_Ejercicios">Series: 5-10</h3>
            <h3 class="I_Ejercicios">Duración: 10 repeticiones</h3> <br />
          </div>
          <div class="Exercises">
            <h2 class="T_Ejercicios">Press de Pecho</h2>
            <img src={Ejercicio2_3} alt="Ejercicio2_3" align="left" className="Ejercicio2_3" />
            <h3 class="I_Ejercicios">Series: 5-10</h3>
            <h3 class="I_Ejercicios">Duración: 10 repeticiones</h3>
          </div>
        </div>
      </div>
    </body>
  );
}
export default D_Exercise2;