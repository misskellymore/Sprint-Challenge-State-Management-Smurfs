
import { FETCH_SMURF, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAILURE } from '../actions/ActionIndex.js';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

const reducerState = (state = initialState, action) => {
  switch (action.type){


      case FETCH_SMURF:
      return {
      ...state,      
      fetchingSmurfs: true,
      error: null
  }

      case FETCH_SMURF_SUCCESS:
      return{
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false
      }

      case FETCH_SMURF_FAILURE:
      return {
        ...state,
        fetchingSmurfs: false,
        error: action.payload
    }


    default:
        return state;


}
};

export default reducerState;