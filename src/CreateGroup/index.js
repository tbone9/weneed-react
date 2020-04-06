import React, {Component} from 'react';

class CreateGroup extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            description: ''
        }
    }

    // This sets the state to the current value of the form
    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
        console.log(e.currentTarget.name, 'current target')
    } 
    
    createGroup = async(e, group) => {
        e.preventDefault()
        console.log(group);
        try {
            const createdGroup = await fetch(`${process.env.REACT_APP_API_URL}/group/`, {
                method: 'POST',
                body: JSON.stringify(group),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const response = await createdGroup.json();
            console.log(response);
            this.props.history.push(`/main`); 
        } catch (error) {
            console.log(error);
        }
    }

    render(){
        return (
            <form 
            onSubmit={(e) => this.createGroup(e, this.state)}
            >
                <label htmlFor='title'>Title: </label>
                <input type='text' id='title' name='title' onChange={this.handleChange}/><br></br>
                <label htmlFor='description'>Description: </label>
                <textarea id='description' name='description' rows='4' cols='50' onChange={this.handleChange}></textarea><br></br>
    
                <input type='submit' value='Submit'/>
    
            </form>
        )

    }
}

export default CreateGroup;