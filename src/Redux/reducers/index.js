import {combineReducers} from "redux";
import movieReducer from "./movieReducer";
import movieListReducer from "./movieListReducer";


const reducers = combineReducers({

    movieReducer,
    movieListReducer

})

export default reducers;



