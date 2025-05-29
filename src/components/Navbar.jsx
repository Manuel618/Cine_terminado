import React, { useState } from "react";
import "./../styles/Navbar.css";

export default function Navbar({ setModulo, modulo }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleNavClick(section) {
    setModulo(section);
    setMenuOpen(false);
  }

  return (
    <nav className="navbar">
      {/* Logo eliminado para dejar solo los controles */}

      {/* Botón menú hamburguesa (solo móvil) */}
      <button
        className={`navbar-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <button
          onClick={() => handleNavClick("cartelera")}
          className={modulo === "cartelera" ? "active" : ""}
        >
          Cartelera
        </button>
       
        <button
          onClick={() => handleNavClick("estrenos")}
          className={modulo === "estrenos" ? "active" : ""}
        >
          Próximos Estrenos
        </button>
        <button
          onClick={() => handleNavClick("info")}
          className={modulo === "info" ? "active" : ""}
        >
          Información
        </button>
      </div>
    </nav>
  );
}
