import { useState } from "react";
import "../styles/header.css";

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header>
      <nav className="nav-bar">
        <ul className="nav-links">

          <li className="nav-left">
            <img
              src="/images/icons/menu.png"
              alt="Menu"
              onClick={() => setMenuAberto(!menuAberto)}
              style={{ cursor: "pointer" }}
            />

            <a href="/">
              <img
                src="/images/icons/logo_text.png"
                alt="HyperTech"
              />
            </a>
          </li>

          <li className="nav-mid">
            <input
              type="text"
              placeholder="Pesquisa"
              className="search"
            />
          </li>

          <li className="nav-right">

            <a href="/carrinho">
              <img
                src="/images/icons/carrinho2.png"
                alt="Carrinho"
              />
            </a>

            <a href="/login">
              <img
                src="/images/icons/Generic avatar.png"
                alt="Login"
              />
            </a>

          </li>

        </ul>

        {menuAberto && (
          <div className="menu-dropdown">
            <a href="/">Início</a>
            <a href="/catalogo">Catálogo</a>
            <a href="/carrinho">Carrinho</a>
          </div>
        )}

      </nav>
    </header>
  );
}

export default Header;