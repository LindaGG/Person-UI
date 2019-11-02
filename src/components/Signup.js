import React, { Component } from 'react';
import axios from 'axios'
class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fullName : "",
            email : "",
            score : "",
            userName : "",
            password : ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event){
        
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    
    handleSubmit(event){
        event.preventDefault()
        console.log(this.state)
        axios
			.post('http://localhost:8080/person', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
    }

    
    render() {
        const {fullName, email, score, userName, password} = this.state
        return (
            <div>
                <div>
                    <h1>Please Sign Up ! </h1>
                    <br></br>
                    <br></br>
                    <br></br>

                </div>
                <form onSubmit = {this.handleSubmit}>
                    <div>
                        <label> Your Full Name </label>
                        <input type = 'text' 
                            name = "fullName"
                            value = {fullName} 
                            onChange = {this.handleChange}>
                        </input>
                    </div>
                    <br></br>
                    <div>
                        <label> Your Email Address </label>
                        <input type = 'text' 
                            name = "email"
                            value = {email} 
                            onChange = {this.handleChange}>
                        </input>
                    </div>
                    <br></br>
                    <div>
                        <label> Your Score </label>
                        <input type = 'text' 
                            name = "score"
                            value = {score} 
                            onChange = {this.handleChange}>
                        </input>
                    </div>
                    <br></br>
                    <div>
                        <label> Username </label>
                        <input type = 'text' 
                            name = "userName"
                            value = {userName} 
                            onChange = {this.handleChange}>
                        </input>
                    </div>
                    <br></br>
                    <div>
                        <label>Password</label>
                        <input type = 'password' 
                            name = "password"
                            value = {password} 
                            onChange = {this.handleChange}>
                        </input>
                    </div>
                    <br></br>
                    <div>
                        <button type = 'submit'>Sign Up</button>
                    </div>
                    <br></br>
                    <div>
                        A return user? Please login Here !
                    </div>
                </form>
            </div>
        );
    }
}

export default Signup;