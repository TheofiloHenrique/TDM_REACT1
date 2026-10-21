import JuegoCard from "./JuegoCard.jsx";

function Favoritos({ juegosFavoritos, favoritos, agregarFavorito, quitarFavorito }) {
  return (
    <section className="seccion" id="favoritos">
      <h2>Mis favoritos</h2>
      <p className="contador">Tienes {juegosFavoritos.length} juego(s) en favoritos</p>

      {juegosFavoritos.length === 0 ? (
        <p>Aún no has agregado juegos. Elige alguno del catálogo.</p>
      ) : (
        <div className="grid">
          {juegosFavoritos.map((juego) => (
            <JuegoCard
              key={juego.id}
              juego={juego}
              esFavorito={favoritos.includes(juego.id)}
              agregarFavorito={agregarFavorito}
              quitarFavorito={quitarFavorito}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Favoritos;