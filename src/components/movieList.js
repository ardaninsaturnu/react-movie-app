import React from 'react';


const MovieList = (props) => {

  return (

    <>
      {props.movies.map((movie, index) => (
        <div className={`col-xl-4 mt-3`}>
          <div className="card w-75">
            <img src={movie.Poster} className="card-img-top" alt={`${movie.Title} cover image.`}/>
            <div className="card-body">
              <h5 className="card-title">{movie.Title}</h5>
              <p className="card-text">{movie.Year}</p>
            </div>
          </div>
        </div>


      ))}
    </>


  )

};

export default MovieList