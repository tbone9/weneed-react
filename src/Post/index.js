import React from 'react';
import styles from './Post.module.css';

function post(props) {
    return (
        <div className={styles.post} key={props.post._id}>
            <h2>{props.post.title}</h2>
            <p>{props.post.description}</p>
            <p>Type: {props.post.postType}</p>
            <p>Category: {props.post.category}</p>
            <p>Date posted: {props.post.date}</p>
            <p>Resolved: {props.post.resolved ? 'Yes' : 'No'}</p>
        </div>
    )
}

export default post;