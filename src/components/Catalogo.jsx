import Filtros from "./Filtros.jsx";
import JuegoCard from "./JuegoCard.jsx";

function Catalogo({ juegos, favoritos, filtro, cambiarFiltro, agregarFavorito, quitarFavorito }) {
  return (
    <section className="seccion" id="catalogo">
      <h2>Catálogo de juegos</h2>
      <Filtros filtro={filtro} cambiarFiltro={cambiarFiltro} />

      <div className="grid">
        {juegos.map((juego) => (
          <JuegoCard
            key={juego.id}
            juego={juego}
            esFavorito={favoritos.includes(juego.id)}
            agregarFavorito={agregarFavorito}
            quitarFavorito={quitarFavorito}
          />
        ))}
      </div>
    </section>
  );
}

export default Catalogo;