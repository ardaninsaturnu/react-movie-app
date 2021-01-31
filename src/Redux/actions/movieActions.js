import * as actionTypes from "./actionTypes"

const goMovie = (movie) => {
  return {

    type: actionTypes.GO_MOVİE_PAGE,
    payload: movie

  }
}


export default {goMovie}

