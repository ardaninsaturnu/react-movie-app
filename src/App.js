import React,{useState,useEffect} from 'react'
import MovieList from "./components/movieList";
import SearchBar from "./components/searchBar";
import Header from "../src/components/header";
import List from "./Pages/List";
import Movie from "./Pages/movie"


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
    
    <div className="App bg-dark">
      <Header/>
      <div className={`container`}>
        <div className={`row`}>
          <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
        </div>
        <div className={`row d-flex`}>
            <MovieList movies={movies}/>
        </div>
      </div>
    </div>





  );
}

export default App;
