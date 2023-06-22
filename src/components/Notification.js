import React, { useContext } from 'react'
import { NotificationContext } from '../context/NotificationContext'
import { VisitorContext } from '../context/VisitorContext'

export default function Notification() {
    const {fetchedNotifications} = useContext(NotificationContext)
    const {setApprovedVisitor} = useContext(VisitorContext)
    const handleOnAccept = (visitor) => {
        const societyUser = localStorage.getItem("societyUser")
        console.log(societyUser)
        if(societyUser){
            console.log(societyUser.user)
            const username = societyUser.user.userName
            setApprovedVisitor({
                ...visitor,
                isApproved: true,
                approverName: username
            })
        }
    }
    const handleOnDecline = (visitor) => {
        const societyUser = localStorage.getItem("societyUser")
        setApprovedVisitor({
            ...visitor,
            isApproved: false,
            approverName: societyUser.user.userName
        })
    }
    if(fetchedNotifications === undefined || fetchedNotifications === null || fetchedNotifications === []){
        return (
            <center>
                <h4>No notification</h4>
            </center>
        )
    }
  return (
    <div>
        {fetchedNotifications && <div>
            {fetchedNotifications.map((notification) => (
                <div key={notification.notificationId} className="card">
            <div className="card-body">
                <p className="card-text">{notification.message}</p>
                <p className='card-text'>Date : {notification.timestamp[2]}-{notification.timestamp[1]}-{notification.timestamp[0]}</p>
                {notification.visitor.approverName === null && <button type="button" className='btn btn-primary' onClick={() => handleOnAccept(notification.visitor)}>Accept</button>}
                {notification.visitor.approverName === null && <button type="button" className="btn btn-danger" onClick={() => handleOnDecline(notification.visitor)}>Decline</button>}
                {(notification.visitor.approverName !== null && (notification.visitor.isApproved ? <button type="button" className='btn btn-primary' disabled>Accepted</button>
                 : 
                 <button type="button" className="btn btn-danger" disabled>Declined</button>))}
            </div>
            </div>))}
        </div>}
    </div>
  )
}
