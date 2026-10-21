import { useState } from "react";
import { juegos } from "./data/juegos.js";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Catalogo from "./components/Catalogo.jsx";
import Favoritos from "./components/Favoritos.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  const [favoritos, setFavoritos] = useState([]);
  const [filtro, setFiltro] = useState("Todos");

  const agregarFavorito = (id) => {
    if (!favoritos.includes(id)) {
      setFavoritos([...favoritos, id]);
    }
  };

  const quitarFavorito = (id) => {
    setFavoritos(favoritos.filter((favId) => favId !== id));
  };

  const juegosFiltrados =
    filtro === "Todos" ? juegos : juegos.filter((juego) => juego.categoria === filtro);

  const juegosFavoritos = juegos.filter((juego) => favoritos.includes(juego.id));

  return (
    <>
      <Header totalFavoritos={favoritos.length} />
      <Hero />
      <Catalogo
        juegos={juegosFiltrados}
        favoritos={favoritos}
        filtro={filtro}
        cambiarFiltro={setFiltro}
        agregarFavorito={agregarFavorito}
        quitarFavorito={quitarFavorito}
      />
      <Favoritos
        juegosFavoritos={juegosFavoritos}
        favoritos={favoritos}
        agregarFavorito={agregarFavorito}
        quitarFavorito={quitarFavorito}
      />
      <Footer />
    </>
  );
}

export default App;