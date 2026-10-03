function Header() {
  return (
    <header>
      <nav className="nav-bar">
        <ul className="nav-links">

          <li className="nav-left">
            <img
              src="/images/icons/menu.png"
              alt="Menu"
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
      </nav>
    </header>
  );
}

export default Header;