import React from 'react';

function post(props) {
    return (
        <div key={props.post._id}>
            <h2>{props.post.title}</h2>
            <p>{props.post.description}</p>
            <p>Type: {props.post.postType}</p>
            <p>Category: {props.post.category}</p>
        </div>
    )
}

export default post;