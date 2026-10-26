function Header({ totalFavoritos, tema, cambiarTema}) {
    return (
      <header className="header">
        <h1 className="logo">GameHub</h1>
        <nav className="nav">
          <a href="#inicio">Inicio</a>
          <a href="#catalogo">Catálogo</a>
          <a href="#favoritos">Favoritos ({totalFavoritos})</a>
          <button className="boton boton-tema" onClick={cambiarTema}>
           {tema === "oscuro" ? "Modo claro" : "Modo oscuro"}
          </button>
        </nav>
      </header>
    );
  }
  
  export default Header;