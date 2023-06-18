import React, { useContext, useState } from 'react'
import { UserLoginContext, UserLoginProvider } from '../context/UserLoginContext';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import "../App.css";

export default function Login() {

    const navigate = useNavigate()
    const {setCredentials} = useContext(UserLoginContext)

    const handleOnSubmit = (e) => {
        e.preventDefault();
        let body = {
        "username" : document.getElementById("username").value,
        "password" : document.getElementById("password").value
        }
        setCredentials(body)
    }

  return (
    <center>
        <h3 className="mt-3 mb-3">Login</h3>
        <form style={{width : "40%"}} onSubmit={handleOnSubmit} action="/loginUser">
            <div className="mb-3">
                <input type="text" placeholder="Email Address" className="form-control" id="username" name='username'/>
            </div>
            <div className="mb-3">
                <input type="password" placeholder="Password" className="form-control" id="password" name='password'/>
            </div>
            <div className='container' >
                {/*<Link to='/userPage'>*/}<button type="submit" style={{float : 'right'}} className="btn btn-primary gap-2">Submit</button>{/*</Link>*/}
                <button type="reset" style={{float : 'right'}} className="btn transparent-button gap-2">Cancel</button>
            </div>
        </form>
        {/* <Outlet/> */}
    </center>
  )
}
