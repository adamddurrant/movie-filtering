import { motion } from 'framer-motion';

export default function Movie({ movie }) {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <div className='image'>
        <img
          src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
          alt=''
        />
      </div>
      <div className='heading'>
        <h2>{movie.title}</h2>
      </div>
      <div className='description'>
        <p>{movie.overview}</p>
        <div className='rating'>
          <p>Rating: {movie.vote_average}/10</p>
        </div>
      </div>
    </motion.div>
  );
}
