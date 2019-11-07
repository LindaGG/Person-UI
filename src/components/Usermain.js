import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';

class Usermain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lowprice : '',
            upprice : '',
            post : []
        };

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
			.get('http://localhost:8080/hotel/price/'+this.state.lowprice+'/'+this.state.upprice)
			.then(response => {
                console.log("success")
                console.log(response.data)

                this.props.history.push('/postlist', { detail: response.data })
                
                
                    
			})
			.catch(error => {
                console.log("fail")
				console.log(error)
            })
        
            
        
    }
    render() {
        return (
            <div>
                <h1> Welcome {this.props.location.state.fullName}! Would like to choose a hotel? </h1>
                <br></br>
                <br></br>
                <br></br>

                Search hotel only by price
                <br></br>
                <br></br>
                <form onSubmit = {this.handleSubmit}>
                    <div>
                        <label> Enter the LOWER BOUND price here:  </label>
                        <input type = 'text' 
                            name = "lowprice"
                            value = {this.state.lowprice} 
                            onChange = {this.handleChange}>
                        </input>
                    </div>
                    <br></br>
                    <div>
                        <label> Enter the UPPER BOUND price here:  </label>
                        <input type = 'text' 
                            name = "upprice"
                            value = {this.state.upprice} 
                            onChange = {this.handleChange}>
                        </input>
                    </div>
                    <br></br>
                    <div>
                        <button type = 'submit'>view all hotels with inserted price</button>
                    </div>
                    <br></br>
                </form>
                    
                
            </div>
        );
    }
}

export default withRouter(Usermain);