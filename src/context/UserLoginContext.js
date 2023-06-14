import React, { useEffect, useState } from "react"
import axios from 'axios'
import { useNavigate} from 'react-router-dom'

export const UserLoginContext = React.createContext()

const loginUserUrl = "http://localhost:8080/user/login"
const userDetailsUrl = "http://localhost:8080/user/get/details/"

export const UserLoginProvider = ({children}) => {
    const [credentials, setCredentials] = useState()
    const [emailAddress, setEmailAddress] = useState()
    const [user, setUser] = useState()

    const navigate = useNavigate()

    const loginUser = async(url, body) => {
        axios.post(url, body)
           .then((response) => {
            console.log(response)
            if(response.status === 200){
                sessionStorage.setItem("email", response.data.username)
                sessionStorage.setItem("role", response.data.authorities[0].authority)
                navigate("/userPage")
            }
        })
           .catch((error) => {console.log(error)})
    }

    useEffect(() => {
        if(credentials) {
            console.log("loginMethod called")
            loginUser(loginUserUrl, credentials)
        }
    }, [credentials])

    const fetchUserDetails = async(url, emailId) => {
        await axios.get(url + `${emailId}` ).then((response) => {
            console.log(response)
            if(response.status === 200){
                let tempUser = {
                    userId: response.data.userId,
                    userName: response.data.userName,
                    age: response.data.age,
                    contactNo: response.data.contactNo,
                    email: response.data.email,
                    gender: response.data.gender,
                    role: response.data.role
                }
                setUser(tempUser)
                localStorage.setItem("loggedInUser", user)
            }
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        console.log(emailAddress)
        if(emailAddress !== undefined && emailAddress !== ""){
            console.log(emailAddress)
            fetchUserDetails(userDetailsUrl, emailAddress)
        }
    }, [emailAddress])

    return (
        <UserLoginContext.Provider value={{setCredentials, user, setEmailAddress}}>
            {children}
        </UserLoginContext.Provider>
    )
}