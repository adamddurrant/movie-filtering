import { useEffect } from 'react';

// the function below pulls in all the props (state variables and functions) to use
export default function ({
  setActiveGenre,
  activeGenre,
  setFiltered,
  popular,
}) {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular); //if activeGenre is 0 do nothing or setFiltered to all movies
      return;
    }

    const filtered = popular.filter(
      (movie) => movie.genre_ids.includes(activeGenre) // otherwise filter popular (all data) to include only movies with the genre IDs included in activeGenre
    );

    setFiltered(filtered);
  }, [activeGenre]); // the square brackets here will trigger useEffect function to run ONLY when activeGenre() changes

  return (
    <div className='filter-container'>
      <button
        className={activeGenre === 0 ? 'active' : ''}
        onClick={() => setActiveGenre(0)}
      >
        All
      </button>

      <button
        className={activeGenre === 28 ? 'active' : ''}
        onClick={() => setActiveGenre(28)}
      >
        Action
      </button>
      <button
        className={activeGenre === 16 ? 'active' : ''}
        onClick={() => setActiveGenre(16)}
      >
        Animation
      </button>
      <button
        className={activeGenre === 35 ? 'active' : ''}
        onClick={() => setActiveGenre(35)}
      >
        Comedy
      </button>
      <button
        className={activeGenre === 53 ? 'active' : ''}
        onClick={() => setActiveGenre(53)}
      >
        Thriller
      </button>
      <button
        className={activeGenre === 27 ? 'active' : ''}
        onClick={() => setActiveGenre(27)}
      >
        Horror
      </button>
    </div>
  );
}
