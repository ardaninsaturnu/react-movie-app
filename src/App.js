import React from 'react'
import {
  HashRouter as Router,
  Route,
} from "react-router-dom";
import List from "./Pages/List";
import HeaderComponent from "./components/Header/header";
import Movie from "./Pages/Movie";
import {Provider} from "react-redux";
import store from "./Redux/configureStore";



function App() {

  return (
    <Provider store={store}>
      <Router>
        <div>
          <HeaderComponent/>


            <Route exact path={"/"} component={List}/>

            <Route exact path="/movie/:id" component={Movie} />

        </div>
      </Router>
    </Provider>

  );
}


export default App;
