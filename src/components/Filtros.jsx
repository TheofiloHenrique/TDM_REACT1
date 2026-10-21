const categorias = ["Todos", "Aventura", "Simulación", "Deportes"];

function Filtros({ filtro, cambiarFiltro }) {
  return (
    <div className="filtros">
      {categorias.map((categoria) => (
        <button
          key={categoria}
          className={filtro === categoria ? "boton activo" : "boton"}
          onClick={() => cambiarFiltro(categoria)}
        >
          {categoria}
        </button>
      ))}
    </div>
  );
}

export default Filtros;