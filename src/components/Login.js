import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';



import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName : "",
            password : "",
            
        }
        this.person = ""

        
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
			.post('http://localhost:8080/person/login', this.state)
			.then(response => {
                console.log("success")
                this.person = response.data
                console.log(this.person);
                this.props.history.push('/usermain', { fullName: this.person.fullName })
                
                
                    
			})
			.catch(error => {
                console.log("fail")
				console.log(error)
            })
        
            
        
    }
    render() {
        const {userName, password} = this.state
        return (
            <div>
                <div>
                    <h1>Welcome back and please Log in ! </h1>
                    <br></br>
                    <br></br>
                    <br></br>

                </div>
                <form onSubmit = {this.handleSubmit}>
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
                        <button type = 'submit'>Log in</button>
                    </div>
                    <br></br>
                    <div>
                        <Link to = "/signup" >A new user? Please Sin up Here !</Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(Login);