
import { FETCH_SMURF, FETCH_SMURF_SUCCESS, FETCH_SMURF_FAILURE, 
          ADD_SMURF, ADD_SMURF_SUCCESS, ADD_SMURF_FAILURE } from '../actions/ActionIndex.js';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,  
  error: null
};

const reducerState = (state = initialState, action) => {
  switch (action.type){


      case FETCH_SMURF:
      return {
      ...state,      
      fetchingSmurfs: true,
      error: ''
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



    case ADD_SMURF:
      return {
        ...state,
        fetchingSmurfs: true,
        error: ''
      }
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false
      }
    case ADD_SMURF_FAILURE:
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