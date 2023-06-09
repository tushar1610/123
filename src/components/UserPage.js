import React, { useState } from 'react'
import Guards from './Guards';
import Visitors from './Visitors';

export default function UserPage() {

    return (
        <div>
            {/* <Report/> */}
            
            <Visitors title="societyUser"/>
            <Guards/>
        </div>
    )
}
