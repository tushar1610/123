import React, { useContext, useState } from 'react'
import { UserLoginContext, UserLoginProvider } from '../context/UserLoginContext';
import { Outlet, Link, redirect } from 'react-router-dom';
import axios from 'axios'

export default function Login() {

    const url = "http://localhost:8080/loginUser"

    const loginUser = async(url, body) => {
           axios.post(url, body)
           .then((response) => {
            console.log(response)
            // return(
            //     redirect(response.data)
            // )
        })
           .catch((error) => {console.log(error)})
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        let body = {
        "username" : document.getElementById("username").value,
        "password" : document.getElementById("password").value
        }
        loginUser(url, body)
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
