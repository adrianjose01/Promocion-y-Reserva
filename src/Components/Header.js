import React from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.jpg";

const Header = () => {
  return (
    <header>
      <nav className="flex items-center justify-between mx-10 my-3">
        <Link to="/">
          <img className="w-16 h-16" src={logo} alt="Logo" />
        </Link>
        <ul className="flex gap-5 items-center">
          <Link to="/sobre-nosotros" className="font-bold text-base">
            Sobre Nosotros
          </Link>
          <Link to="/lugares-turisticos" className="font-bold text-base">
            Lugares Turisticos
          </Link>
          <Link to="/iniciar-sesion" className="font-bold text-base">
            Iniciar Sesion
          </Link>
          <Link
            to="/registrarse"
            className="py-2 px-4 bg-sky-900 text-white rounded-lg"
          >
            Registrarme
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
