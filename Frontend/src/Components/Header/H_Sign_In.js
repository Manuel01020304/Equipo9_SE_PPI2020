import React from "react";
import { Link } from "react-router-dom";
import Regresar from "../Images/Regresar.png"

function H_Sign_In() {
  return (
        <Link to="/"> <img src={Regresar} alt="Regresar" className="Regresar" /> </Link>
  );
}
export default H_Sign_In;
