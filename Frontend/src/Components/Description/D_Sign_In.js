import React from "react";
import { Link } from "react-router-dom";

function D_Sign_In() {
  return (
    <div>
      <section class="Contenedor2">
        <div class="login">
          <h1>Completa los siguientes datos</h1>
          <form method="post">
            <p>
              <input
                type="text"
                name="usuario"
                placeholder="Nombre de usuario"
              />
            </p>
            <p>
              <input type="text" name="e-mail" placeholder="E-Mail" />
            </p>
            <p>
              <input type="password" name="contra" placeholder="Contraseña" />
            </p>
            <p>
              <input
                type="password"
                name="contra2"
                placeholder="Repetir contraseña"
              />
            </p>
            <Link to="/login">
              <button type="submit" name="commit">
                Registrarse
              </button>
            </Link>
          </form>
        </div>
      </section>
    </div>
  );
}
export default D_Sign_In;
