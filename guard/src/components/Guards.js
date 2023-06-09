import React, { useState } from 'react'

export default function Guards() {
    
    const [buttonId, setButtonId] = useState('Today');

    const handleOnClick = (id) => {
        setButtonId(id);
    }

  return (
    <div>
        <div className='container' style={{display : 'flex', justifyContent : 'space-between', alignItems : 'center'}}>
            <h3 className='titleVisitor'>Guards</h3> 
            <div className="button-group">
                    <button style={{float : 'right'}} className={buttonId === "See All" ? "btn btn-primary gap-2" : "btn transparent-button gap-2"} onClick={() => handleOnClick('See All')}>See All</button>
                    <button style={{float : 'right'}} className={buttonId === "Yesterday" ? "btn btn-primary gap-2" : "btn transparent-button gap-2"} onClick={() => handleOnClick('Yesterday')}>Yesterday</button>
                    <button style={{float : 'right'}} className={buttonId === "Today" ? "btn btn-primary gap-2" : "btn transparent-button gap-2"} onClick={() => handleOnClick('Today')}>Today</button>
            </div>
        </div>

        <div className='card m-2 border border-secondary-subtle border-5 rounded' style={{cursor: "pointer"}}>
            <div className="card-body">
                <h5 className="card-title">Full Name : Guard 1</h5>
                <p className="card-text">Intime : --:--</p>
                <p className="card-text">OutTime : --:--</p>
            </div>
        </div>
    </div>
  )
}
