import React from 'react';
import SmurfContext from '../contexts/SmurfContext.js';


const Smurf = () => {
    const {smurf} = React.useContext(SmurfContext);
    console.log('smuf', smurf)

   

    return(
        <div>
           
        </div>
    )
}


export default Smurf;