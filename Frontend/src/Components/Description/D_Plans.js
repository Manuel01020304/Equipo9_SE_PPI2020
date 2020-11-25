import React from "react";
import { Link } from "react-router-dom";

function D_Plans() {
  return (
    <body>
      <div class="Contenedor3">
        <div class="Planes">
          <h1 class="Titulos">PLANES QUE TENEMOS PARA TI</h1> <br />
          <h3 class="Ejercicios">Abdomen</h3>
          <Link to="/exercise1">
            <button type="button" class="btn-secondary">
              Entrar
            </button>
          </Link>{" "}
          <br /> <br /> <br />
          <h3 class="Ejercicios">Pecho</h3>
          <Link to="/exercise2">
            <button type="button" class="btn-secondary">
              Entrar
            </button>
          </Link>{" "}
          <br /> <br /> <br />
          <h3 class="Ejercicios">Piernas</h3>
          <Link to="/exercise3">
            <button type="button" class="btn-secondary">
              Entrar
            </button>
          </Link>{" "}
          <br /> <br /> <br />
          <h3 class="Ejercicios">Brasos</h3>
          <Link to="/exercise4">
            <button type="button" class="btn-secondary">
              Entrar
            </button>
          </Link>
        </div>
      </div>
    </body>
  );
}
export default D_Plans;
