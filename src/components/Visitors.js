import React, { useContext, useState } from 'react'
import { Card } from 'react-bootstrap';
import { VisitorContext } from '../context/VisitorContext';

export default function Visitors({title}) {

    const [buttonId, setButtonId] = useState('Today');

    const {setDateToFetch, visitorsFetchedByDate, allVistorsFetched} = useContext(VisitorContext)

    const handleOnClick = (id) => {
        setButtonId(id);
        setDateToFetch(id)
    }

  return (
    <div>
        <div className='container' style={{display : 'flex', justifyContent : 'space-between', alignItems : 'center'}}>
                <h3 className='titleVisitor'>Visitors</h3> 
                <div className="button-group">
                    <button style={{float : 'right'}} className={buttonId === "See All" ? "btn btn-primary gap-2" : "btn transparent-button gap-2"} onClick={() => handleOnClick('See All')}>See All</button>
                    <button style={{float : 'right'}} className={buttonId === "Yesterday" ? "btn btn-primary gap-2" : "btn transparent-button gap-2"} onClick={() => handleOnClick('Yesterday')}>Yesterday</button>
                    <button style={{float : 'right'}} className={buttonId === "Today" ? "btn btn-primary gap-2" : "btn transparent-button gap-2"} onClick={() => handleOnClick('Today')}>Today</button>
                </div>
            </div>

            {buttonId !== "See All" && <div className='card m-2 border border-secondary-subtle border-5 rounded' style={{cursor: "pointer"}}>
                {visitorsFetchedByDate.map((visitor) => (
                    <div key={visitor.visitorId} className="card-body">
                    <h5 className="card-title">Full Name : {visitor.visitorName}</h5>
                    <div className='container' style={{display : 'flex', justifyContent : 'space-between', alignItems : 'center'}}>
                        <p className="card-text">Intime : {visitor.inTime}</p>
                        <p className="card-text">OutTime : {visitor.outTime !== null ? visitor.outTime: '--:--'}</p>
                    </div>
                    {title === "societyUser" ? <p className="card-text">Guard Name : {visitor.guardName}</p> : <p className="card-text">Flat No : {visitor.societyUser.flatNo}</p>}
                </div>
                ))}    
            </div>}

            {buttonId === "See All" && <div className='card m-2 border border-secondary-subtle border-5 rounded' style={{cursor: "pointer"}}>
                {allVistorsFetched.map((visitor) => (
                    <div key={visitor.visitorId} className="card-body">
                    <h5 className="card-title">Full Name : {visitor.visitorName}</h5>
                    <div className='container' style={{display : 'flex', justifyContent : 'space-between', alignItems : 'center'}}>
                        <p className="card-text">Intime : {visitor.inTime}</p>
                        <p className="card-text">OutTime : {visitor.outTime !== null ? visitor.outTime: '--:--'}</p>
                    </div>
                    {title === "societyUser" ? <p className="card-text">Guard Name : {visitor.guardName}</p> : <p className="card-text">Flat No : {visitor.societyUser.flatNo}</p>}
                </div>
                ))}    
            </div>}
    </div>
  )
}
