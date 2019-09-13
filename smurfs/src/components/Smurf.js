import React from 'react';
import SmurfContext from '../contexts/SmurfContext.js';
import axios from 'axios';

const Smurf = () => {
    const {smurf, setSmurf} = React.useContext(SmurfContext);

    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            setSmurf(res.data)
        })

        .catch((error) => {console.log('axios error')})

    return(
        <div>
            Testing...
        </div>
    )
}


export default Smurf;