import React, {Component} from 'react';

class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            postType: '',
            category: '',
            groupId: props.match.params.id
        }
    }

    // postType and category don't set state by default because they are drop-down menus, so this sets their state to initical values
    componentDidMount = () => {
        this.setState({
            postType: 'need',
            category: 'food'
        })
    }

    // This sets the state to the current value of the form
    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
        console.log(e.currentTarget.name, 'current target')
        // console.log(this.props.match.params.id)
    } 
    
    createPost = async(e, post) => {
        e.preventDefault()
        console.log(post);
        try {
            const createdPost = await fetch(`${process.env.REACT_APP_API_URL}/group/${this.props.match.params.id}`, {
                method: 'POST',
                body: JSON.stringify(post),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const response = await createdPost.json();
            console.log(response);
            this.props.history.push(`/group/${this.props.match.params.id}`); 
        } catch (error) {
            console.log(error);
        }
    }

    render(){
        return (
            <form 
            onSubmit={(e) => this.createPost(e, this.state)}
            >
                <label htmlFor='title'>Title: </label>
                <input type='text' id='title' name='title' onChange={this.handleChange}/><br></br>
                <label htmlFor='description'>Description: </label>
                <textarea id='description' name='description' rows='4' cols='50' onChange={this.handleChange}></textarea><br></br>
                <label htmlFor='postType'>Post Type: </label>
                <select id='postType' name='postType' onChange={this.handleChange}>
                    <option value='need'>I Need</option>
                    <option value='have'>I Have</option>
                </select><br></br>
                <label htmlFor='category'>Category: </label>
                <select id='category' name='category' onChange={this.handleChange}>
                    <option value='food'>Food</option>
                    <option value='medical'>Medical</option>
                    <option value='service'>Service</option>
                </select><br></br>
    
                <input type='submit' value='Submit'/>
    
            </form>
        )

    }
}

export default CreatePost;