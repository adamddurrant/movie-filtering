import './App.css';
import { useEffect, useState } from 'react';
import Movie from './Movie';
import Filter from './Filter';
import { motion } from 'framer-motion';

function App() {
  //Piece of state
  const [popular, setPopular] = useState([]); //stores the data
  const [filtered, setFiltered] = useState([]); // a new state to store filtered values
  const [activeGenre, setActiveGenre] = useState(0); // Genre is represented by a number from the API hence '0' in useState (35 = comedy & Action = 28, 0 is nothing)

  useEffect(() => {
    //When the component is rendered, run fetchPopular()
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=14ca71028f35704fbfb7151ec4bc3e1b&language=en-US' //Grab data from API
    );
    const movies = await data.json(); //put data into JSON

    setPopular(movies.results); //sets 'popular' with all the object results from the API
    setFiltered(movies.results); //sets 'Filtered' with all the object results from the API (a duplicate)
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
      <div className='popular-movies'>
        {filtered.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default App;
