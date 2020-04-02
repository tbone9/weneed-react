import React, {Component} from 'react';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            email: '',
            password: '',
            city: '',
            state: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    } 

    handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${process.env.REACT_APP_API_URL}/user/register/`, {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response, 'Response')
        // const parsedResponse = await response.json();
        // console.log(parsedResponse, 'Registration!');
        if (response.status === 201) {
            console.log('sign up successful');
            this.props.history.push('/main');
        }
    }

    render() {
        return (
            <div>
                <h2>Register</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='username'>Username: </label>
                    <input type='text' id='username' name='username' onChange={this.handleChange}/><br></br>
                    <label htmlFor='email'>Email: </label>
                    <input type='email' id='email' name='email' onChange={this.handleChange}/><br></br>
                    <label htmlFor='password'>Password: </label>
                    <input type='password' id='password' name='password' onChange={this.handleChange}/><br></br>
                    <label htmlFor='City'>City: </label>
                    <input type='text' id='city' name='city' onChange={this.handleChange}/><br></br>
                    <label htmlFor='State'>State: </label>
                    <input type='text' id='state' name='state' onChange={this.handleChange}/><br></br>

                    <input type='submit' value='Register'/>

                </form>
            </div>
        )
    }
}

export default Register;