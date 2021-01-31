import * as actionTypes from "../actions/actionTypes"


const movieReducer =(state="arda",action ) => {

  switch (action.type) {

    case actionTypes.GO_MOVİE_PAGE:

      return action.payload

    default:

      return state;

  }


}

export default movieReducer;

