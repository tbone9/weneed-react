import React, {Component} from 'react';

class MainContainer extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }
    // componentDidMount = () => {
    //     this.getPosts();
    // }
    
    getPosts = async() => {
        try {
            const posts = await fetch(`${process.env.REACT_APP_API_URL}/post/`, {
                method: 'GET',
                // mode:'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                    // 'Access-Control-Allow-Origin': '*'
                },
                // credentials: 'include'
            });
            const response = await posts.json();
            console.log(response.data);
            this.setState({posts: response.data});
        } catch (error) {
            console.log(error);
        }
    };

    render(){
        const posts = this.state.posts.map((post) => {
            return(
                <div key={post._id}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <p>Type: {post.postType}</p>
                    <p>Category: {post.category}</p>
                </div>
            )
        })
        return(
            <div>
                <h1>Main Container</h1>
                <button onClick={this.getPosts}>Get Posts</button>
                
                    {posts}
                
            </div>

        )
    }
}

export default MainContainer;