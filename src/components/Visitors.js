import React, { useContext, useState } from 'react'
import { VisitorContext } from '../context/VisitorContext';

export default function Visitors({title}) {

    const [buttonId, setButtonId] = useState('Today');

    // const {setDateToFetch, visitorsFetchedByDate} = useContext(VisitorContext)

    const handleOnClick = (id) => {
        setButtonId(id);
        // setDateToFetch(id)
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

            <div className='card m-2 border border-secondary-subtle border-5 rounded' style={{cursor: "pointer"}}>
                <div className="card-body">
                    <h5 className="card-title">Full Name : User 1</h5>
                    <div className='container' style={{display : 'flex', justifyContent : 'space-between', alignItems : 'center'}}>
                        <p className="card-text">Intime : --:--</p>
                        <p className="card-text">OutTime : --:--</p>
                    </div>
                    {title === "societyUser" ? <p className="card-text">Guard Name : Guard 1</p> : <p className="card-text">Flat No : A101</p>}
                </div>
            </div>
    </div>
  )
}
