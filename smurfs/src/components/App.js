import React, { useState, useEffect } from "react";
import "./App.css";


import Form from '../components/Form.js';
import axios from 'axios';
import MoreSmurf from '../components/MoreSmurf.js';




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
        
        
        
        <Form />
        <MoreSmurf />
        

      </div>
    );
  
}

export default App;
