import React, { Component } from 'react';
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts :[]
        }
    }

    componentDidMount(){
        this.setState({
            posts : this.props.location.state.detail
        })
        
    }
    
    render() {
        const {posts} = this.state
        return (
            <div>
                List of Price Satisfied Hotel
                {
                    posts.length ? 
                    posts.map(post => <div key = {post.id}> 
                        <div>
                            Hotel Name : {post.nameWithBrand} 
                        </div>
                        <br></br>
                        <div>
                            Hotel Price : {post.price} 
                        </div>
                        <br></br>
                        <div>
                            Hotel Total Rooms : {post.totalRoom} 
                        </div>
                        <br></br>
                        <div>
                            Hotel Remaining Rooms : {post.remainRoom} 
                        </div>
                        <br></br>
                        <br></br>
                    </div> 
                    ):
                    null
                }
            </div>
        );
    }
}

export default PostList;