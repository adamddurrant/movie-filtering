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
      (
        movie // otherwise filter popular (all data) to include only movies with the genre IDs included in activeGenre
      ) => movie.genre_ids.includes(activeGenre)
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
        className={activeGenre === 35 ? 'active' : ''}
        onClick={() => setActiveGenre(35)}
      >
        Comedy
      </button>
      {/* comedy genre is '35' in the API */}
      <button
        className={activeGenre === 28 ? 'active' : ''}
        onClick={() => setActiveGenre(28)}
      >
        Action
      </button>
      {/* action genre is '28' in the API */}
    </div>
  );
}
