import React from 'react'
import {useState,useEffect} from "react"
import HeaderComponent from "./components/Header/header"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import film from '../src/images/film.jpg'
import arrowback from "./images/Icon ionic-ios-arrow-back.svg"

import classes from './App.module.css';
import SearchBar from "./components/SearchBar/searchBar";
import List from "./Pages/List";


function App() {

  const [movies, setMovies] = useState([]);
  const [searchValue,setSearchValue] = useState('all');

  const getMovieRequest = async (searchValue) => {

    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=d0628be2`

    const response = await fetch(url);
    const responseJson =await response.json()

    if(responseJson.Search){

      setMovies(responseJson.Search);

    }

  }

  useEffect(()=> {

    getMovieRequest(searchValue)

  },[searchValue])

  return (


    <Router>
      <Switch>
        <Route path={"/movie"} component={Movie}>
          <Movie/>
        </Route>
        <Route path={"/"}>
          <List/>
        </Route>
      </Switch>
    </Router>


  );
}




const Movie = () => {

  return (

    <div>
      <HeaderComponent/>
      <div className={`container ${classes.movie}`}>
        <Link to={"/"}><img src={arrowback}/>Movies</Link>
      </div>
      <div className="container bg-light p-5 mx-auto">

        <div className="row">
          <div className="col-xl-4">
            <img className="w-100" src={film} height="530"/>
          </div>
          <div className="col-xl-8 ps-5">
            <div className="d-flex my-2 py-3">
              <strong>Title :</strong>
              <p className="px-3">Movie Name</p>
            </div>
            <div className="d-flex my-2 py-3">
              <strong>Year :</strong>
              <p className="px-3">Movie Name</p>
            </div>
            <div className="d-flex my-2 py-3">
              <strong>Actors :</strong>
              <p className="px-3">Movie Name</p>
            </div>
            <div className="d-flex my-2 py-3">
              <strong>Director :</strong>
              <p className="px-3">Movie Name</p>
            </div>
            <div className="d-flex my-2 py-3">
              <strong>Runtime :</strong>
              <p className="px-3">Movie Name</p>
            </div>
            <div className="d-flex my-2 py-3">
              <strong>Rewards :</strong>
              <p className="px-3">Movie Name</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )

}


export default App;
