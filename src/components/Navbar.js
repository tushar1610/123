import React from 'react'
import '../App.css';
import { Outlet, Link, useNavigate } from "react-router-dom";
import { PersonCircle } from "react-bootstrap-icons"
import { useContext } from 'react';
import { UserLoginContext } from '../context/UserLoginContext';

export default function Navbar() {

  const {user} = useContext(UserLoginContext)

  const navigate = useNavigate()

  return (
    <>
    <nav className="navbar navbar-light bg-light " >
      <div className='container'>
          <Link to='/' className="navbar-brand">Security Management System</Link>
          <Link to='/' className="nav-link ms-auto me-4">Home</Link>
          <Link to="/contactUs" className="nav-link me-3" >Contact Us</Link>
          <div className="dropdown">
            <button className="btn btn-transparent" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <PersonCircle size={25}/>
            </button>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/userProfile">Profile</Link></li>
              <li><Link className="dropdown-item" to="/notification">Notifications</Link></li>
              <li><hr className="dropdown-divider"/></li>
              <li><Link className="dropdown-item" to="/logout">Logout</Link></li>
            </ul>
          </div>
      </div>
    </nav>
    <Outlet/>
  </>
  )
}
