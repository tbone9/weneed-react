import React, {Component} from 'react';
// import { Link } from 'react-router-dom';
import Post from '../Post';
import { Link } from 'react-router-dom';

class Group extends Component {
    constructor(){
        super();
        this.state = {
            group: {},
            posts: []
        };
    }

    componentDidMount = () => {
        this.fetchGroup();
    }

    fetchGroup = async () => {
        const data = await fetch(`${process.env.REACT_APP_API_URL}/group/${this.props.match.params.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                    },
                });
        const group = await data.json();
        const groupPosts = group.posts;
        groupPosts.sort(function(a,b){ 
            if (a.date > b.date) return -1;
            if (a.date < b.date) return 1;
            return 0;
        });
        this.setState({
            group: group,
            posts: groupPosts
        })
    }

    render(){
        return(
            <div>
                <h2>{this.state.group.title}</h2> 
                <p>{this.state.group.description}</p> 
                <p>Group created: {this.state.group.date}</p>
                <Link to={`/group/create-post/${this.props.match.params.id}`}>Make a Post</Link>
                <h3>Posts:</h3>
                {this.state.posts.map(post => (
                        
                            <Post key={post._id} post={post}/>
                        
                    ))}
            </div>
        )
    }
}


export default Group;