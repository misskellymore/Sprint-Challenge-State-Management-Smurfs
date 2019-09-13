import React, { useState, useEffect } from "react";
import "./App.css";
import {Route} from 'react-router-dom';
import SmurfContext from '../contexts/SmurfContext.js';
import Smurf from './Smurf.js';
import Form from '../components/Form.js';
import axios from 'axios';




function App() {
  const [smurf, setSmurf] = useState([]);


  useEffect(() => {


    axios.get('http://localhost:3333/smurfs')
          .then(res => {
              setSmurf(res.data)
          })

  .catch((error) => {console.log('axios error')})



  }, [])

  

      return (
      <div className="App">
        <SmurfContext.Provider value = {{smurf}}>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <Smurf />
        <Form />
        </SmurfContext.Provider>

      </div>
    );
  
}

export default App;
