import React from "react"
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom"
import Header from './Component/Header/Header'
import Home from './Component/Home/Home'
import Footer from "./Component/Footer/Footer"
import MovieDetail from "./Component/MovieDetail/MovieDetail"
import PageNotFound from "./Component/PageNotFound/PageNotFound"
import './App.css';
import Registration from "./Component/Register/Register"
import Login from "./Component/Login/Login"

function App() {
  const isAuthenticated = localStorage.getItem('user');

  return (
    <div className="app">
      <Router>
        <Header  />


        <div className="container">
          <Routes>

            <Route path="/register" element={<Registration />} />
            <Route
              path="/login"
              element={isAuthenticated ? <Navigate to="/" /> : <Login />}
            />
            <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
            <Route path="/movie/:imdbID" element={<MovieDetail />} />
          </Routes>
        </div>

        <Footer />

      </Router>
    </div>
  );
}

export default App;
