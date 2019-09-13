import React, { Component} from 'react';
import axios from 'axios';




export default class Form extends Component {
    constructor() {
        super();
        this.state={name:"", age: "", height: ""}
    }

    handleChange = (e) =>{

        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        })


    }


    onSubmit = (e) => {
        e.preventDefault();
        const newSmurf = {
            name:this.state.name,
            age: this.state.age,
            height: this.state.height
        }

        axios.post('http://localhost:3333/smurfs', newSmurf)
         .then(res => 
            console.log(res.data))   

            .catch(error => {
                console.log('post error', error)
            })
    }
    



    render() {
    return (
        <div>
            <h1> Smurf Form</h1>
            <form onSubmit= {this.onSubmit}>
                <input
                        type= "text"
                        name= "name"
                        placeholder= "Name"
                        className= "name"
                        value = {this.state.name}
                        onChange ={this.handleChange} />
                <input
                         type= "number"
                         name= "age"
                         placeholder= "Age"
                         className= "age"
                         value = {this.state.age}
                         onChange ={this.handleChange} />
                <input
                         type= "text"
                         name= "height"
                         placeholder= "Height"
                         className= "height"
                         value = {this.state.height}
                         onChange ={this.handleChange} />

                <button type="submit">Enter</button>
            </form>
            
        </div>
    )
}
}





