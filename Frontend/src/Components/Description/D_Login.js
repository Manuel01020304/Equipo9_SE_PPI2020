import React from "react";
import { Link } from "react-router-dom";

function D_Login() {
  return (
    <div>
      <section class="Contenedor2">
        <div class="login">
          <h1>Ingresa tus datos</h1>
          <form method="post">
            <p>
              <input
                type="text"
                name="usuario"
                placeholder="Nombre de usuario"
              />
            </p>
            <p>
              <input
                type="password"
                name="contra"
                placeholder="Contraseña"
              />
            </p>
            <button type="submit" name="commit">
              <Link to="/home_page"> Ingresar </Link>
            </button>
          </form>
        </div>
        <div class="login-ayuda">
          <p>
            ¿Olvidaste la contraseña?
            <a href="perdida.php"> Click aquí para recuperarla </a>.
          </p>
          <p>
            ¿No tienes cuenta?
            <Link to="/sign_in"> Crea tu cuenta aquí </Link>.
          </p>
        </div>
      </section>
    </div>
  );
}
export default D_Login;
