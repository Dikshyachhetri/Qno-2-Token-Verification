import axios from 'axios';
import React, {Component} from 'react'

const Login = () => {

    const handleSubmit=e => {
        e.preventDefault();

        const data ={
            email: this.email,
            password:this.password
        };

        axios.post('login', data).then(res => {
            localStorage.setItem('token', res.data.token);
        })
        .catch(err => {
            console.log(err)
        });
    }
    return (
        <div>
            <form onSubmit ={() =>this.handleSubmit()}>
                <h3>Login</h3>

                
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" placeholder="Email" onChange = {e => this.email = e.target.value} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="text" className="form-control" placeholder="Password" onChange={e => this.password = e.target.value} />
                </div>

                <button className="btn btn-primary btn-block"> Login </button>
            </form>
        </div>
    )
}

export default Login
