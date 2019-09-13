import axios from 'axios';



export const FETCH_SMURF = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAILURE = "FETCH_SMURF_FAILURE";

export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURF_SUCCESS = " ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";



export const smurfDispatch = () => dispatch =>{

    dispatch({type: {type: FETCH_SMURF}})
    axios.get('http://localhost:3333/smurfs')
    .then(res => {
        console.log(res);
        dispatch({type: FETCH_SMURF_SUCCESS, payload: res.data})
    })


    .catch(error => {
        console.log(error)
        dispatch({type: FETCH_SMURF_FAILURE})
    })
}


export const addSmurf = smurf => dispatch => {
    dispatch({ type: ADD_SMURF })
    axios.post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      console.log(res);
      dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data })
    })

    .catch(error => {
      console.log(error);
      dispatch({ type: ADD_SMURF_FAILURE, payload: error.message})
    })
  }
