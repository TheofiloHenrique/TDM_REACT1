function Header({ totalFavoritos }) {
    return (
      <header className="header">
        <h1 className="logo">GameHub</h1>
        <nav className="nav">
          <a href="#inicio">Inicio</a>
          <a href="#catalogo">Catálogo</a>
          <a href="#favoritos">Favoritos ({totalFavoritos})</a>
        </nav>
      </header>
    );
  }
  
  export default Header;