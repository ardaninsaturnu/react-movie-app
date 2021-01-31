import React,{useEffect} from "react";
import {Link} from "react-router-dom";
import HeaderComponent from "../components/Header/header";
import SearchBar from "../components/SearchBar/searchBar";
import {bindActionCreators} from "redux";
import movieActions from "../Redux/actions/movieActions";
import {connect} from 'react-redux';

import film from "../images/film.jpg";
import classes from "../App.module.css";





const List = (props) => {

  useEffect(()=> {

    props.actions.getMovies()

  },[])

  return (

    <div>
      <HeaderComponent/>
      <div className={`container ${classes.listContainer}`}>
        <SearchBar/>
        <div className={`row g-0`}>

          <div className={`col-xl-4 p-3`}>
            <div><img src={film} style={{width: "100%"}}/></div>
            <div className={`text-start`}>
              <Link to={"/movie"}><h4>{props.defaultMovie}</h4></Link>
              <p>1999</p>
            </div>
          </div>


          <div className={`col-xl-4 p-3`}>
            <div><img src={film} style={{width: "100%"}}/></div>
            <div className={`text-start`}>
              <Link to={"/movie"}><h4>{props.movies.length}</h4></Link>
              <p>1999</p>
            </div>
          </div>

          <div className={`col-xl-4 p-3`}>
            <div><img src={film} style={{width: "100%"}}/></div>
            <div className={`text-start`}>
              <Link to={"/movie"}><h4>Movie Name</h4></Link>
              <p>1999</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    defaultMovie : state.movieReducer,
    movies : state.movieListReducer
  }
}


function mapStateToDispatch(dispatch) {
  return {
    actions: {
      getMovies:bindActionCreators(movieActions.getMovies,dispatch)
    }
  }
}

export default connect(mapStateToProps,mapStateToDispatch)(List)
