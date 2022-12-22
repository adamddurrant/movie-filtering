import './App.css';
import { useEffect, useState } from 'react';
import Movie from './Movie';
import Filter from './Filter';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  //Piece of state
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
    //The props being passed in the filter component call include the state variables and set state functions - this will enable changes to be made in the filter component
    <div className='App'>
      <Filter
        popular={popular}
        setFiltered={setFiltered}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div layout className='popular-movies'>
        <AnimatePresence>
          {filtered.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
