import { useEffect, useRef, useState } from "react";
import afterlifeImg from "../assets/afterlife.jpg";
import transformersImg from "../assets/transformers.jpg";
import mowgliImg from "../assets/mowgli.jpg";
import shiftImg from "../assets/shift.png";
import squidgameImg from "../assets/squidgame.webp";
import harrypotterImg from "../assets/harrypotter.jpg";

const movies = [
  { id: 1, title: "Afterlife", rating: "★ 8.2", image: afterlifeImg },
  { id: 2, title: "Transformers", rating: "★ 7.5", image: transformersImg },
  { id: 3, title: "Mowgli", rating: "★ 7.1", image: mowgliImg },
  { id: 4, title: "Day Shift", rating: "★ 6.8", image: shiftImg },
  { id: 5, title: "Round 6", rating: "★ 8.7", image: squidgameImg },
  { id: 6, title: "Harry Potter", rating: "★ 8.9", image: harrypotterImg }
];

const Main = () => {
  const carouselRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Funcionalidade de Carrossel Automático
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      if (carouselRef.current) {
        const container = carouselRef.current;
        const cardWidth = container.firstElementChild?.clientWidth || 280;
        const maxScroll = container.scrollWidth - container.clientWidth;

        // Se chegar ao final, volta para o início, senão avança para o próximo card
        if (container.scrollLeft >= maxScroll - 10) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: cardWidth + 16, behavior: "smooth" });
        }
      }
    }, 3000); // Avança a cada 3 segundos

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <main className="main">
      <div className="col col1">
        <h2>Seus Filmes</h2>
        <p>
          Aqui, você pode escolher o filme que deseja assistir.<br />
          Caso queira escolher mais, clique no botão.
        </p>
        <button type="button">Mais</button>
      </div>

      <div
        className="col cards"
        ref={carouselRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {movies.map((movie) => (
          <button
            key={movie.id}
            type="button"
            className="card"
            style={{ backgroundImage: `url(${movie.image})` }}
            aria-label={`Assistir ${movie.title}`}
          >
            <span className="movie-rating">{movie.rating}</span>
            <div className="card-overlay">
              <h3 className="movie-title">{movie.title}</h3>
            </div>
          </button>
        ))}
      </div>
    </main>
  );
};

export default Main;