import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { MovieCard } from './MovieCard';
export const Watched = () => {
    const {watched} = useContext(GlobalContext);
    return (
      <div className='movie-page'>
        <div className='container'>
          <div className='header'>
            <h1 className='heading'>Danh sách phim đã xem</h1>

            <span className="count-pill">
              {watched.length} {watched.length === 1 ? "movie" : "movies"}
            </span>
          </div>

          {watched.length > 0 ? (
            <div className='movie-grid'>
              {watched.map((movie) => (
                <MovieCard movie={movie} key={movie.id} type='watched' />
              ))}
            </div>
          ) : (
            <h2 className='no-movies'>Không có phim trong danh sách!</h2>
          )}
        </div>
      </div>
    )
}
