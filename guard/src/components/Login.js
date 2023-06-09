import React, { useState } from 'react'

export default function Login() {

    const [buttonId, setButtonId] = useState("submit");

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
                <label htmlFor="inputEmail" className="form-label">Email address</label>
                <input type="email" className="form-control" id="loginEmail"/>
            </div>
            <div className="mb-3">
                <label htmlFor="inputPassword" className="form-label">Password</label>
                <input type="password" className="form-control" id="inputPassword"/>
            </div>
            <div className='container' >
                <button type="submit" style={{float : 'right'}} className={buttonId === "submit" ? "btn btn-primary gap-2" : "btn transparent-button gap-2"} onSubmit={(e) => handleOnSubmit(e, 'submit')}>Submit</button>
                <button type="cancel" style={{float : 'right'}} className={buttonId === "cancel" ? "btn btn-primary gap-2" : "btn transparent-button gap-2"} onClick={(e) => handleOnClick(e, 'cancel')}>Cancel</button>
            </div>
        </form>
    </div>
  )
}
