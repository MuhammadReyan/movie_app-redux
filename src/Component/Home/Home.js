import React, { useEffect } from 'react'
import MovieListing from '../MovieListing.js/MovieListing'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../features/movies/movieSlice'


const Home = () => {
 
  const dispatch = useDispatch()
  const movieText = "Rio";
  const showText = "Funny";
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText))
    dispatch(fetchAsyncShows(showText))
  }, [dispatch])





  return (
    <div>
      <div className='banner-img'></div>
      <MovieListing />



    </div>
  )
}

export default Home