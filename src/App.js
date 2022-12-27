import './App.css';
import { useEffect, useState } from 'react';
import Movie from './Movie';
import Filter from './Filter';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  //State management
  const [popular, setPopular] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    let movies = [];
    for (let i = 1; i <= 5; i++) {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=14ca71028f35704fbfb7151ec4bc3e1b&language=en-US&page=${i}`
      );
      const pageData = await data.json();
      movies = [
        ...movies,
        ...pageData.results.filter((movie) => movie.backdrop_path !== null),
      ];
    }
    setPopular(movies);
    setFiltered(movies);
  };

  return (
    <div className='App'>
      <div className='header'>
        <div className='updated'>
          <span className='update-text'>Updated every week</span>
        </div>
        <h1>Top 100 Most Popular Movies</h1>
        <p className='explainer'>
          See the worlds most popular movies in one place.
        </p>
        <p className='disclaimer'>
          "This product uses the TMDB API but is not endorsed or certified by
          TMDB."
        </p>
      </div>
      <div className='container'>
        <Filter
          popular={popular}
          setFiltered={setFiltered}
          activeGenre={activeGenre}
          setActiveGenre={setActiveGenre}
        />
        <motion.div layout className='popular-movies'>
          <AnimatePresence>
            {filtered.map((movie, index) => {
              //add reduce() in here to prevent duplicates
              return <Movie key={movie.id} movie={movie} number={index + 1} />;
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
