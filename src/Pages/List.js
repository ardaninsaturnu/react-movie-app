import React from "react";
import SearchBar from "../components/SearchBar/searchBar";
import {connect} from "react-redux"

import Spinner from "../components/Spinner/spinner";
import MovieContainer from "../components/MovieContainer";


const List = (props) => {

  const {loading} = props

  return (

    <div>
      <div className={`container`}>
        <SearchBar/>
        {loading ? <Spinner/>:<MovieContainer/>}

      </div>
    </div>
  )
}

const mapStateToProps = state => ({

  loading: state.movies.loading

});


export default connect(mapStateToProps)(List);
