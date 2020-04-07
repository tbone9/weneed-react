import React, {Component} from 'react';
import Post from '../Post';
import { Link } from 'react-router-dom';
import { fetchGroup } from '../../services/ajax';

class Group extends Component {
    constructor(){
        super();
        this.state = {
            group: {},
            posts: []
        };
    }

    async componentDidMount () {
        const group = await fetchGroup(this.props.match.params.id);

        this.setState({
            group: group,
            posts: group.data
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