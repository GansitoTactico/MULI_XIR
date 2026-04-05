import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import "./Navbar.css";

function Navbar({ variant }) {
  const { isAuthenticated, logout, user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const homepageLinks = (
    <>
      <li>
        <Link to="/login">Iniciar sesion</Link>
      </li>
      <li>
        <Link to="/Document">Documentacion</Link>
      </li>
    </>
  );

  const appLinks = isAuthenticated ? (
    <>
      <li>
        <Link to="/create-process">Crear Proceso</Link>
      </li>
      <li>
        <Link to="/add-task">Añadir tarea</Link>
      </li>
      <li>
        <Link onClick={logout} to="/" className="logout-link">
          Logout
        </Link>
      </li>
    </>
  ) : (
    <>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register" className="register-link">
          Register
        </Link>
      </li>
    </>
  );

  return (
    <nav
      className={`navbar ${variant === "homepage" ? "homepage-variant" : ""}`}
    >
      <div className="navbar-brand">
        <h1>{isAuthenticated ? `Bienvenido ${user.username}` : "Muli_Xir"}</h1>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        {variant === "homepage" ? homepageLinks : appLinks}
      </ul>
    </nav>
  );
}

export default Navbar;
