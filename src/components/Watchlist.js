import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { MovieCard } from './MovieCard'

export const Watchlist = () => {
   const { watchlist } = useContext(GlobalContext)

    return (
      <div className='movie-page'>
        <div className='container'>
          <div className='header'>
            <h1 className='heading'>Danh sách phim của tôi</h1>
            <span className='count-pill'>
              {watchlist.length} {watchlist.length === 1 ? 'movie' : 'movies'}
            </span>
          </div>

          {watchlist.length > 0 ? (
            <div className='movie-grid'>
              {watchlist.map((movie) => (
                <MovieCard movie={movie} key={movie.id} type='watchlist' />
              ))}
            </div>
          ) : (
            <h2 className='no-movies'>
              Không có phim trong danh sách! Hãy thêm !
            </h2>
          )}
        </div>
      </div>
    )
}
