import React, {useState} from 'react';


const Form = () => {
    const [newSmurf, setNewSmurf] = useState();


    return (
        <div>
            <h1> Smurf Form</h1>
            <form>
                <input
                        type= "text"
                        name= "name"
                        placeholder= "Name"
                        className= "name"
                        value = {newSmurf.name} />
                <input
                         type= "text"
                         name= "age"
                         placeholder= "Age"
                         className= "age"
                         value = {newSmurf.age} />
                <input
                         type= "text"
                         name= "height"
                         placeholder= "Height"
                         className= "height"
                         value = {newSmurf.height} />
            </form>
            <button type="submit">Enter</button>
        </div>
    )
}