import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { SocietyUserContext } from '../context/SocietyUserContext';
import { Outlet, Link } from 'react-router-dom';

export default function Registration() {

    const [buttonId, setButtonId] = useState('submit');

    const [userRole, setUserRole] = useState("ROLE_SOCIETY_USER")
    const [userIsAdmin, setUserIsAdmin] = useState(false);

    const {setSocietyUser} = useContext(SocietyUserContext)

    const handleOnSubmit = (e, id) => {
        e.preventDefault();
        setButtonId(id);
    }

    const handleOnClick = (e, id) => {
        e.preventDefault();
        console.log(id);
        setButtonId(id);
    }

    const handlePageChange = (e) => {
        return(
            <div>
                <Link to="/login"/>
                <Outlet/>
            </div>
        )
    }

    const handleRoleClick = (e) => {
        console.log(e.target.id)
        if(e.target.id === "adminUser"){
            setUserIsAdmin(true)
            setUserRole("ROLE_ADMIN")
        } else {
            if(e.target.id === "societyUser"){
                setUserIsAdmin(false)
                setUserRole("ROLE_SOCIETY_USER")
            } else {
                setUserIsAdmin(false)
                setUserRole("ROLE_GUARD_USER")
            }
        }
    }

  return (
    <center>
        <div className="container">
            <h3 className="mt-3">Register</h3>
        </div>
        <form style={{width : "40%"}}>
            <div className="mb-3">
                <input type="text" placeholder="Username" className="form-control" id="inputUserName"/>
            </div>
            <div className="mb-3">
                <input type="email" placeholder="Email Address" className="form-control" id="inputEmail"/>
            </div>
            <div className="input-group gap-5">
                <div className="mb-3">
                    <input type="number" placeholder="Age" className="form-control" id="inputAge"/>
                </div>
                <div className="mb-3">
                    <input type="number" placeholder="Contact Number" className="form-control" id="inputContactNo"/>
                </div>
            </div>
            <div className="mb-3">
                <input type="text" placeholder="Gender" className="form-control" id="inputGender"/>
            </div>
            <div className="mb-3">
                <input type="password" placeholder="Password" className="form-control" id="inputPassword"/>
            </div>
            <div className="mb-3">
                <input type="text" placeholder="Flat Number" className="form-control" id="inputFlatNo"/>
            </div>
            <div className="mb-3">
                <input type="text" placeholder="Owner Name" className="form-control" id="inputOwnerName"/>
            </div>
            <div className="dropdown">
                <button style={{float : "left"}} className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {`${userRole}`}
                </button>
                <ul className="dropdown-menu">
                    <li className="dropdown-item" id="adminUser" onClick={(e) => handleRoleClick(e)}>Admin</li>
                    <li className="dropdown-item" id="societyUser" onClick={(e) => handleRoleClick(e)}>Society Member</li>
                    <li className="dropdown-item" id="guardUser" onClick={(e) => handleRoleClick(e)}>Guard</li>
                </ul>
            </div>
            <div className='container' >
                <button type="submit" style={{float : 'right'}} className={buttonId === "submit" ? "btn btn-primary gap-2" : "btn transparent-button gap-2"} onClick={(e) => {
                    handleOnSubmit(e, 'submit')
                    setSocietyUser({
                        flatNo: document.getElementById("inputFlatNo").value,
                        isAdmin: userIsAdmin,
                        ownerName: document.getElementById("inputOwnerName").value,
                        user: {
                            userName: document.getElementById("inputUserName").value,
                            age: document.getElementById("inputAge").value,
                            contactNo: document.getElementById("inputContactNo").value,
                            gender: document.getElementById("inputGender").value,
                            email: document.getElementById("inputEmail").value,
                            password: document.getElementById("inputPassword").value,
                            role: userRole
                        }
                    })
                    handlePageChange(e)
                }}>Submit</button>
                <button type="cancel" style={{float : 'right'}} className={buttonId === "cancel" ? "btn btn-primary gap-2" : "btn transparent-button gap-2"} onClick={(e) => handleOnClick(e, 'cancel')}>Cancel</button>
            </div>
        </form>
    </center>
  )
}
