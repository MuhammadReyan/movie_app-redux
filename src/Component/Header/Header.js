import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import user from '../../Images/user.png'
import "./header.css"
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies, fetchAsyncShows } from '../features/movies/movieSlice'


const Header = () => {
  const dispatch = useDispatch()

  const data = JSON.parse(localStorage.getItem('user'));
  const [term, setTerm] = useState("");


  const submitHandler = (e) => {
    e.preventDefault();
    if (term === "") return alert("Please enter search term!");
    dispatch(fetchAsyncMovies(term))
    dispatch(fetchAsyncShows(term))
    setTerm("");
  };

  return (
    <div className='header'>



      <div className='logo'>  <Link to={"/"} style={{ textDecoration: "none", color: 'white' }}> Movie App     </Link> </div>


      {data ? (
  <div className="search-bar">
    <form onSubmit={submitHandler}>
      <input
        type="text"
        value={term}
        placeholder="Search Movies or Shows"
        onChange={(e) => setTerm(e.target.value)}
      />
      <button type="submit">
        <i className="fa fa-search"></i>
      </button>
    </form>
  </div>
) : (
 ""
)}


      <div className='user_image'>
        <img src={user} alt='user' />
        <span>{data?.username}</span>
      </div>
    </div>
  )
}

export default Header