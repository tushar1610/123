import React from 'react'
import '../App.css';
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-light bg-light " >
      <div className='container'>
          <Link to='/' className="navbar-brand">Security Management System</Link>
          <Link to='/' className="nav-link ms-auto me-5">Home</Link>
          <Link to="/contactUs" className="nav-link me-5" >Contact Us</Link>
          <Link to='/feedback' className="nav-link" >Feedback</Link>
      </div>
    </nav>
    <Outlet/>
  </>
  )
}
