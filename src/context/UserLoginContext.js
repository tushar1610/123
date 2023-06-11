import React, { useEffect, useState } from "react"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export const UserLoginContext = React.createContext()

const loginUserUrl = "http://localhost:8080/login"

export const UserLoginProvider = ({children}) => {
    const [credentials, setCredentials] = useState()

    const loginUser = async(url, body) => {
        try {
            const response = await axios.post(url, body)
            console.log(response)

            if(response.ok){
                console.log(response.data)
            }
        } catch (e) {
            console.log(e.response)
        }
    }

    useEffect(() => {
        if(credentials) {
            console.log("loginMethod called")
            loginUser(loginUserUrl, credentials)
        }
    }, [credentials])

    return (
        <UserLoginContext.Provider value={{setCredentials}}>
            {children}
        </UserLoginContext.Provider>
    )
}