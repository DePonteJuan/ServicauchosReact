import React from "react";
import Wrapper from "./navbar-styles";

export default function Navbar() {
  return (
    <Wrapper>
      <a href="#" className="logo">
        Servicauchos
      </a>
      <div className="navbar">
        <a>Inicio</a>
        <a>Servicios</a>
        <a>Contacto</a>
      </div>
    </Wrapper>
  );
}
