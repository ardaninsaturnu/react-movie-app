import React from 'react'
import {searchMovie,fetchMovies,setLoading} from "../../Redux/actions/searchActions";
import {connect} from "react-redux";



const SearchBar = (props) => {

  const onChange = e => {

    props.searchMovie(e.target.value)

  }

  const onSubmit = e => {

    e.preventDefault()
    props.fetchMovies(props.text);
    props.setLoading();

  }


  return (

    <>


      <form className="row form-inline d-flex flex-column align-items-center" onSubmit={onSubmit}>
        <input
          className="form-control mt-5"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={onChange}
        />
        <button className="w-50 btn my-3 text-success fw-bolder" style={{backgroundColor: "#FFFBD2"}} type="submit">Search</button>
      </form>


    </>

  )
}

const mapStateToProps = state => ({
  text: state.movies.text
});

export default connect(
  mapStateToProps,
  { searchMovie, fetchMovies, setLoading }
)(SearchBar);