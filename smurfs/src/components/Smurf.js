import React from 'react';
import SmurfContext from '../contexts/SmurfContext.js';
import axios from 'axios';

const Smurf = () => {
    const {smurf} = React.useContext(SmurfContext);

    return(
        <div>
            Testing...
        </div>
    )
}


export default Smurf;