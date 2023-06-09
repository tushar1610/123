import React, { useState } from 'react'
import '../App.css'
import Login from './Login';
import Registration from './Registration';

export default function () {
  const [buttonClicked, setButtonClicked] = useState('');

  return (
    <div>
        <div className='button-group gap-2'>
            <button type="button" className="btn btn-primary" id='loginButton' onClick={() => setButtonClicked('loginButton')}>Login</button>
            <button type="button" className="btn btn-primary" id='registrationButton' onClick={() => setButtonClicked('registrationButton')}>Register</button>
        </div>
        { buttonClicked === 'loginButton' && <Login/>}
        { buttonClicked === 'registrationButton' && <Registration/>}
    </div>
  )
}
