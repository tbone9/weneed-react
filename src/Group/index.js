import React, {useState, useEffect} from 'react';
// import { Link } from 'react-router-dom';
import Post from '../Post';

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
        console.log(group.posts[0])
        
        setGroup(group);
    }
    return (
        <div>
            <h1>{group.title}</h1>  
            {group.posts.map(post => (
                    
                        <Post key={post._id} post={post}/>
                    
                ))}
        </div>
    )
}

export default Group;