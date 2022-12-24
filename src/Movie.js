import { motion } from 'framer-motion';

export default function Movie({ movie, number }) {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <div className='image'>
        <div className='position-container'>
          <p className='position'>{number}</p>
        </div>
        <img
          src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
          alt=''
        />
      </div>
      <div className='heading'>
        <div className='rating'>
          <p className='rating-content'>Rating: {movie.vote_average}</p>
        </div>
        <h2>{movie.title}</h2>
        <p>
          {movie.release_date.toLocaleString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: 'numeric',
          })}
        </p>
      </div>
      <div className='description'>
        <p className='overview'>{movie.overview.substring(0, 100) + '...'}</p>
      </div>
    </motion.div>
  );
}
