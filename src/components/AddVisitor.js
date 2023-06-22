import React, { useContext } from 'react'
import { VisitorContext } from '../context/VisitorContext';

export default function AddVisitor() {

    const {setAddVisitor} = useContext(VisitorContext)
    const handleOnSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <div>
        <form>
  <div className="form-outline mb-4">
    <input type="text" id="visitorName" className="form-control" placeholder='Visitor Name' />
  </div>

  <div className="form-outline mb-4">
    <input type="text" id="age" className="form-control" placeholder='Age'/>
  </div>

  <div className="form-outline mb-4">
    <input type="number" id="contactNo" className="form-control" placeholder='Contact Number'/>
  </div>

  <select className="select" id='selectGender' placeholdor='Gender'>
  <option value="1">Male</option>
  <option value="2">Female</option>
</select>

  <div className="form-outline mb-4">
    <input type="text" id="guardName" className="form-control" placeholder='Guard Name'/>
  </div>

  <div className="form-outline mb-4">
    <input type="text" id="flatNo" className="form-control" placeholder='Flat Number'/>
  </div>

  <div className="form-outline mb-4">
    <textarea className="form-control" id="purpose" rows="4" placeholder='Purpose'/>
  </div>

  <button type="submit" className="btn btn-primary btn-block mb-4" onClick={async(e) => {
    await setAddVisitor({
        visitorName : document.getElementById("visitorName").value,
        age : document.getElementById("age").value,
        contactNo : document.getElementById("contactNo").value,
        gender : document.getElementById('selectGender').options[document.getElementById('selectGender').selectedIndex].text,
        purpose : document.getElementById('purpose').value,
        guardName : document.getElementById('guardName').value,
        societyUser : {
            flatNo : document.getElementById('flatNo').value
        }
    })
    handleOnSubmit(e)
  }}>Send</button>
</form>
    </div>
  )
}
