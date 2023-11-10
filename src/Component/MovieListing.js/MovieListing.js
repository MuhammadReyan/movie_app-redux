import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../features/movies/movieSlice'
import MovieCard from '../MovieCard/MovieCard'
import './MovieListing.css'
import Slider from 'react-slick'
import { Settings } from '../../common/setting'

const MovieListing = () => {


  const movies = useSelector(getAllMovies)
  const shows = useSelector(getAllShows)

  let renderMovies, renderShows = ""
  renderMovies = movies.Response === "True" ? (movies?.Search.map((movie, index) => (
    < MovieCard key={index} data={movie} />)
  )) : (<div className="movies-error"><h3>{movies.Error}</h3></div >)


  renderShows = movies?.Response === "True" ? (shows?.Search?.map((movie, index) => (
    < MovieCard key={index} data={movie} />)
  )) : (<div className="movies-error"><h3>{movies.Error}</h3></div >)

  // console.log(renderMovies)
  return (
    <div className='movie-wrapper'>
      <div className='movie-list'>
        <h2>Movies</h2>
        <div className='movie-container'>
          <Slider {...Settings}> {renderMovies} </Slider>
        </div>
      </div>


      <div className='show-list'>
        <h2>Shows</h2>
        <div className='movie-container'>
        <Slider {...Settings}> {renderShows} </Slider>
        </div>
      </div>





    </div>
  )
}

export default MovieListing