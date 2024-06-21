import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../Context/user-context";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isLoggedIn } = useContext(UserContext);

  function onToggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <header>
      <nav className="flex items-center justify-between mx-10 my-3">
        <Link to="/">
          <img className="w-16 h-16" src={logo} alt="Logo" />
        </Link>
        <div>
          <div className="text-center md:hidden">
            <button onClick={onToggleMenu}>
              {isMenuOpen ? (
                <FontAwesomeIcon icon={faX} size="32" />
              ) : (
                <FontAwesomeIcon icon={faBars} size="32" />
              )}
            </button>
          </div>
          <ul
            className={`gap-5 flex-col items-center m-10 ${
              isMenuOpen ? "flex" : "hidden"
            } md:flex md:flex-row md:m-0`}
          >
            <Link to="/sobre-nosotros" className="font-bold text-base">
              Sobre Nosotros
            </Link>
            <Link to="/lugares-turisticos" className="font-bold text-base">
              Lugares Turisticos
            </Link>
            {isLoggedIn ? (
              <>
                <Link to="/perfil" className="font-bold text-base">
                  Mi Cuenta
                </Link>
                <button className="py-2 px-4 bg-sky-900 text-white rounded-lg">
                  Cerrar Sesion
                </button>
              </>
            ) : (
              <>
                <Link to="/iniciar-sesion" className="font-bold text-base">
                  Iniciar Sesion
                </Link>
                <Link
                  to="/registrarse"
                  className="py-2 px-4 bg-sky-900 text-white rounded-lg"
                >
                  Registrarme
                </Link>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
