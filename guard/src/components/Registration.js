import React, { useContext, useState } from 'react'
import { SocietyUserContext } from '../context/SocietyUserContext';

export default function Registration() {

    const [buttonId, setButtonId] = useState('submit');

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

  return (
    <div>
        <form>
            <div className="mb-3">
                <label htmlFor="inputUserName" className="form-label">Username</label>
                <input type="text" className="form-control" id="inputUserName"/>
            </div>
            <div className="mb-3">
                <label htmlFor="inputAge" className="form-label">Age</label>
                <input type="number" className="form-control" id="inputAge"/>
            </div>
            <div className="mb-3">
                <label htmlFor="inputContactNo" className="form-label">Contact Number</label>
                <input type="number" className="form-control" id="inputContactNo"/>
            </div>
            <div className="mb-3">
                <label htmlFor="inputGender" className="form-label">Gender</label>
                <input type="text" className="form-control" id="inputGender"/>
            </div>
            <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">Email address</label>
                <input type="email" className="form-control" id="inputEmail"/>
            </div>
            <div className="mb-3">
                <label htmlFor="inputPassword" className="form-label">Password</label>
                <input type="password" className="form-control" id="inputPassword"/>
            </div>
            <div className="mb-3">
                <label htmlFor="inputFlatNo" className="form-label">Flat Number</label>
                <input type="text" className="form-control" id="inputFlatNo"/>
            </div>
            <div className="mb-3">
                <label htmlFor="inputIsAdmin" className="form-label">IsAdmin</label>
                <input type="text" className="form-control" id="inputIsAdmin"/>
            </div>
            <div className="mb-3">
                <label htmlFor="inputOwnerName" className="form-label">Owner Name</label>
                <input type="text" className="form-control" id="inputOwnerName"/>
            </div>
            <div className="mb-3">
                <label htmlFor="inputRole" className="form-label">Role</label>
                <input type="text" className="form-control" id="inputRole"/>
            </div>
            <div className='container' >
                <button type="submit" style={{float : 'right'}} className={buttonId === "submit" ? "btn btn-primary gap-2" : "btn transparent-button gap-2"} onClick={(e) => {
                    handleOnSubmit(e, 'submit')
                    setSocietyUser({
                        flatNo: document.getElementById("inputFlatNo").value,
                        isAdmin: document.getElementById("inputIsAdmin").value,
                        ownerName: document.getElementById("inputOwnerName").value,
                        user: {
                            userName: document.getElementById("inputUserName").value,
                            age: document.getElementById("inputAge").value,
                            contactNo: document.getElementById("inputContactNo").value,
                            gender: document.getElementById("inputGender").value,
                            email: document.getElementById("inputEmail").value,
                            password: document.getElementById("inputPassword").value,
                            role: document.getElementById("inputRole").value
                        }
                    })
                }}>Submit</button>
                <button type="cancel" style={{float : 'right'}} className={buttonId === "cancel" ? "btn btn-primary gap-2" : "btn transparent-button gap-2"} onClick={(e) => handleOnClick(e, 'cancel')}>Cancel</button>
            </div>
        </form>
    </div>
  )
}
