import React, { Component, useState, useEffect} from 'react';
import axios from 'axios';
import {addSmurf} from '../actions/ActionIndex.js';
import {connect} from 'react-redux';




const Form = props =>{   

    const { addSmurf, smurfs, addingSmurf, error } = props;
    const [smurf, setSmurf] = useState({name:'', age:'', height:''});


   const handleChange = (e) =>{

        e.preventDefault();
        setSmurf({ ...smurf, [e.target.name]: e.target.value });


    }


    const onSubmit = (e) => {
        e.preventDefault();

        addSmurf(smurf);
        console.log('new smurf added', smurf)
        setSmurf({name:'', 
                  age:'', 
                  height:''});  

        
    }
    



    
    return (
        <div>
            <h1> Smurf Form</h1>
            <form onSubmit= {onSubmit}>
                <input
                        type= "text"
                        name= "name"
                        placeholder= "Name"
                        className= "name"
                        value = {smurf.name}
                        onChange ={handleChange} />
                <input
                         type= "number"
                         name= "age"
                         placeholder= "Age"
                         className= "age"
                         value = {smurf.age}
                         onChange ={handleChange} />
                <input
                         type= "text"
                         name= "height"
                         placeholder= "Height"
                         className= "height"
                         value = {smurf.height}
                         onChange ={handleChange} />

                <button type="submit">Enter</button>
            </form>
            
        </div>
    )
}



const mapStateToProps = state => {
    return {
      smurfs: state.smurfs,
      addingSmurf: state.addingSmurf,
      error: state.error   
    }
  }
  
  export default connect(mapStateToProps, { addSmurf })(Form);




