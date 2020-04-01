import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Post from '../Post';

class MainContainer extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }
    componentDidMount = () => {
        this.getPosts();
    }
    
    getPosts = async() => {
        try {
            const posts = await fetch(`${process.env.REACT_APP_API_URL}/post/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const response = await posts.json();
            console.log(response.data);
            this.setState({posts: response.data});
        } catch (error) {
            console.log(error);
        }
    };

    

    render(){
        
        return(
            <div className='mainContainer'>
                <h1>Latest Posts</h1>
                <Link to='/create-post'>Create a Post</Link>
                {this.state.posts.map((post) => {
                    return <Post post={post} />
                })}
                
                
            </div>

        )
    }
}

export default MainContainer;