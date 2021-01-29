import Header from "./Components/header";
import './App.css';
import film from '../src/images/film.jpg'
import {BrowserRouter as Router,Switch,Route, Link} from "react-router-dom";

import {} from 'react-router-dom';

function App() {

  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path={"/"}>
            <List/>
          </Route>
          <Route path={"/movie"}>
            <Movie/>
          </Route>
        </Switch>
      </Router>


    </div>
  );
}


const List = () => {

  return (
    <div className={`container`}>

      <Header/>

      <Link to={"/"} component={List}>Movies</Link>

      <div className={`row g-0`}>

        <div className={`col-xl-4 p-3`}>
          <div><img src={film} style={{width:"100%"}}/></div>
          <div className={`text-start`}>
            <h4>Movie Name</h4>
            <p>1999</p>
          </div>
        </div>



      <div className={`col-xl-4 p-3`}>
          <div><img src={film} style={{width:"100%"}}/></div>
          <div className={`text-start`}>
            <h4>Movie Name</h4>
            <p>1999</p>
        </div>
      </div>

      <div className={`col-xl-4 p-3`}>
          <div><img src={film} style={{width:"100%"}}/></div>
          <div className={`text-start`}>
            <h4>Movie Name</h4>
            <p>1999</p>
        </div>
      </div>

      </div>



    </div>
  )

}


const Movie = () => {


  <div>
    <Header/>
  </div>

}




export default App;
