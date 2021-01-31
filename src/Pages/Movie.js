import React, { Component,useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchMovie, setLoading } from '../Redux/actions/searchActions';

import Spinner from '../components/Spinner/spinner';
import arrowback from "../images/Icon ionic-ios-arrow-back.svg";
import classes from "../App.module.css";



const Movie = (props) => {

  useEffect(()=>{


    props.fetchMovie(props.match.params.id);
    props.setLoading();


  },[])

  const { loading, movie } = props;

  let movieInfo = (


    <div>
      <div className={`container ${classes.movie}`}>
        <Link to={"/"}><img src={arrowback} alt="ok"/>Movies</Link>
      </div>
      <div className="container bg-light p-5 mx-auto">

        <div className="row">
          <div className="col-xl-4">
            <img className="w-100" src={movie.Poster} height="530" alt={movie.Title}/>
          </div>
          <div className="col-xl-8 ps-5">
            <div className="d-flex my-2 py-3">
              <strong>Title :</strong>
              <p className="px-3">{movie.Title}</p>
            </div>
            <div className="d-flex my-2 py-3">
              <strong>Year :</strong>
              <p className="px-3">{movie.Year}</p>
            </div>
            <div className="d-flex my-2 py-3">
              <strong>Actors :</strong>
              <p className="px-3">{movie.Actors}</p>
            </div>
            <div className="d-flex my-2 py-3">
              <strong>Director :</strong>
              <p className="px-3">{movie.Director}</p>
            </div>
            <div className="d-flex my-2 py-3">
              <strong>Runtime :</strong>
              <p className="px-3">{movie.Writer}</p>
            </div>
            <div className="d-flex my-2 py-3">
              <strong>Rewards :</strong>
              <p className="px-3">{movie.Rewards}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );

  let content = loading ? <Spinner /> : movieInfo;
  return <div>{content}</div>;

}



const mapStateToProps = state => ({
  loading: state.movies.loading,
  movie: state.movies.movie
});

export default connect(
  mapStateToProps,
  { fetchMovie, setLoading }
)(Movie);










