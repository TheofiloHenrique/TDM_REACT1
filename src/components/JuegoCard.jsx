function JuegoCard({ juego, esFavorito, agregarFavorito, quitarFavorito }) {
    return (
      <article className="card">
        <img src={juego.imagen} alt={juego.nombre} />
        <div className="card-info">
          <h3>{juego.nombre}</h3>
          <p className="categoria">{juego.categoria}</p>
          <p>{juego.descripcion}</p>
          <p className="plataforma">Plataforma: {juego.plataforma}</p>
  
          {esFavorito ? (
            <button className="boton boton-quitar" onClick={() => quitarFavorito(juego.id)}>
              Quitar de favoritos
            </button>
          ) : (
            <button className="boton boton-principal" onClick={() => agregarFavorito(juego.id)}>
              Agregar a favoritos
            </button>
          )}
        </div>
      </article>
    );
  }
  
  export default JuegoCard;