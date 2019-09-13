import React, { useState } from "react";
import "./App.css";
import {Route} from 'react-router-dom';
import SmurfContext from '../contexts/SmurfContext.js';
import Smurf from './Smurf.js';
import Form from '../components/Form.js';




function App() {
  const [smurf, setSmurf] = useState([]);

      return (
      <div className="App">
        <SmurfContext.Provider value = {{smurf, setSmurf}}>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <Smurf />
        </SmurfContext.Provider>

      </div>
    );
  
}

export default App;
