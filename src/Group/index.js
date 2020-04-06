import React, {useState, useEffect} from 'react';
// import { Link } from 'react-router-dom';
import Post from '../Post';
import { Link } from 'react-router-dom';

function Group({ match }) {
    useEffect(() => {
        fetchGroup();
    }, []);

    const [group, setGroup] = useState({
        posts: []
    });

    const fetchGroup = async () => {
        const data = await fetch(`${process.env.REACT_APP_API_URL}/group/${match.params.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                            },
                        });
        // console.log(data)
        let group = await data.json();
        console.log(group)
        
        setGroup(group);
    }
    return (
        <div>
            <h2>{group.title}</h2> 
            <p>{group.description}</p> 
            <p>Group created: {group.date}</p>
            <Link to={`/group/create-post/${group._id}`}>Make a Post</Link>
            <h3>Posts:</h3>
            {group.posts.map(post => (
                    
                        <Post key={post._id} post={post}/>
                    
                ))}
        </div>
    )
}

export default Group;