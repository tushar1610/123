import React from 'react'
import '../App.css';

export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light " >
    <div className='container'>
        <a className="navbar-brand" href="#">Security Management System</a>
        <a className="nav-link ms-auto me-5" href="#">Home</a>
        <a className="nav-link me-5" href="#">Contact Us</a>
        <a className="nav-link" href="#">Feedback</a>
    </div>
</nav>
  )
}
