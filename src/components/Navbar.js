import React, { useState } from 'react'
import '../App.css';
import { Outlet, Link, useNavigate } from "react-router-dom";
import { PersonCircle } from "react-bootstrap-icons"
import { useContext } from 'react';
import { UserLoginContext } from '../context/UserLoginContext';
import { SocietyUserContext } from '../context/SocietyUserContext';
import { GuardContext } from '../context/GuardContext';
import { NotificationContext } from '../context/NotificationContext';

export default function Navbar() {

  const navigate = useNavigate()

  let role = ""
  let email = ""

  const {setEmailAddress} = useContext(UserLoginContext)
  const {setUserId} = useContext(SocietyUserContext)
  const {setGuardUserId} = useContext(GuardContext)
  const {setNotificationButtonClicked} = useContext(NotificationContext)


  if(localStorage.getItem("role")){
    role = localStorage.getItem("role")
  } else {
    if(localStorage.getItem("guardRole")){
      role = localStorage.getItem("guardRole")
    }
  }

  if(localStorage.getItem("email")){
    email = localStorage.getItem("email")
  } else {
    if(localStorage.getItem("guardEmail")){
      email = localStorage.getItem("guardEmail")
    }
  }

  const profileButton = async() => {
    if(email !== undefined && email !== null && email !== "" ){
        await setEmailAddress(email)
        let tempId;
        if(role === "ROLE_GUARD_USER"){
          tempId = localStorage.getItem("guardUserId")
          await setGuardUserId(tempId)
        } else {
          tempId = localStorage.getItem("userId")
          await setUserId(tempId)
        }
        
    }
  }

  const handleNotification = async() => {
    await setNotificationButtonClicked(true)
  }

  const handleLogout = () => {
    localStorage.clear()
    navigate("/login", {replace : true})
  }

  return (
    <>
    <nav className="navbar navbar-light bg-light " >
      <div className='container'>
          <Link to='/' className="navbar-brand">Security Management System</Link>
          {email ? <Link to={role === "ROLE_GUARD_USER" ? "/guardPage" : "/userPage"} className="nav-link ms-auto me-4">Home</Link> : <Link to="/registrationPage" className="nav-link ms-auto me-4" >Register</Link> }
          <Link to="/contactUs" className="nav-link me-3" >Contact Us</Link>
          { email && <div className="dropdown">
            <button className="btn btn-transparent" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <PersonCircle size={25}/>
            </button>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to={role === "ROLE_GUARD_USER" ? "/guardProfile" : "/userProfile"} onClick={() => profileButton()}>Profile</Link></li>
              { role !== "ROLE_GUARD_USER" && <li><Link className="dropdown-item" to="/notification" onClick={() => handleNotification()}>Notifications</Link></li>}
              <li><hr className="dropdown-divider"/></li>
              <li><div className="dropdown-item" onClick={() => handleLogout()}>Logout</div></li>
            </ul>
          </div>}
      </div>
    </nav>
    <Outlet/>
  </>
  )
}
