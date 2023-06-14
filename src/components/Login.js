import React, { useContext, useState } from 'react'
import { UserLoginContext, UserLoginProvider } from '../context/UserLoginContext';
import { Outlet, Link, useNavigate } from 'react-router-dom';

export default function Login() {

    const {setCredentials, user} = useContext(UserLoginContext)
    
    const navigate = useNavigate();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        let body = {
        "username" : document.getElementById("username").value,
        "password" : document.getElementById("password").value
        }
        setCredentials(body)
        if(user !== undefined){
            return (
                <div>
                    <Link to="/userPage"/>
                    <Outlet/>
                </div>
            )
        }
    }

  return (
    <div>
        <form onSubmit={handleOnSubmit} action="/loginUser">
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Email Address</label>
                <input type="text" className="form-control" id="username" name='username'/>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" name='password'/>
            </div>
            <div className='container' >
                {/*<Link to='/userPage'>*/}<button type="submit" style={{float : 'right'}} className="btn btn-primary gap-2">Submit</button>{/*</Link>*/}
                <button type="reset" style={{float : 'right'}} className="btn transparent-button gap-2">Cancel</button>
            </div>
        </form>
        {/* <Outlet/> */}
    </div>
  )
}
