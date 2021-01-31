import {Link} from "react-router-dom";


const MovieCard = (props) => {

  const {movie} = props;

  return(
    <div className={`col-xl-4 p-3`}>
      <div><img src={movie.Poster} className={`w-100`} alt={movie.Title}/></div>
      <div className={`text-start`}>
        <h4>{movie.Title}</h4>
        <p>{movie.Year}</p>
        <Link to={'/movie/' + movie.imdbID}>More Info >></Link>
      </div>
    </div>
  )
}

export default MovieCard