import React, {Component} from 'react';

function createPost(props) {
    return (
        <form onSubmit={(e) => props.createPost(e, this.body)}>
            <label for='title'>Title: </label>
            <input type='text' id='title' name='title'/><br></br>
            <label for='description'>Description: </label>
            <textarea id='description' name='description' rows='4' cols='50'></textarea><br></br>
            <label for='postType'>Post Type: </label>
            <select id='postType' name='postType'>
                <option value='need'>I Need</option>
                <option value='have'>I Have</option>
            </select><br></br>
            <label for='category'>Category: </label>
            <select id='category' name='category'>
                <option value='food'>Food</option>
                <option value='medicical'>Medical</option>
                <option value='service'>Service</option>
            </select><br></br>

            <input type='submit' value='Submit'/>

        </form>
    )
}

export default createPost;