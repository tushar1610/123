import React, { useEffect, useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
export const SocietyUserContext = React.createContext()

const addSocietyUser = "http://localhost:8080/society/user/add"
const getSocietyUserById = "http://localhost:8080/society/user/get/"

export const SocietyUserProvider = ({children}) => {

    const [societyUser, setSocietyUser] = useState()
    // const [data, setData] = useState()
    const [savedSocietyUser, setSavedSocietyUser] = useState()
    const navigate = useNavigate();
    const postSocietyUser = async(url, body) => {
        try {
            console.log(body)
            const {data} = await axios.post(url, body)
            console.log(data)
            navigate("/login")
        } catch (error) {
            console.log(error.response)
        }
    }

    useEffect(() => {
        if(societyUser) {
            console.log("postMethod called")
            postSocietyUser(addSocietyUser, societyUser)
        }
    }, [societyUser])

    const getSocietyUser = async(url, userId) => {
        try {
            console.log(userId)
            const {data} = await axios.get(url + `${userId}`)
            console.log(data)
            
        } catch (error) {
            console.log(error.response)
        }
    }

    useEffect(() => {
        if(savedSocietyUser) {
            console.log("getMethod called")
            getSocietyUser(getSocietyUserById, savedSocietyUser.user.userId)
        }
    }, [savedSocietyUser])

    return (
        <SocietyUserContext.Provider value={{setSocietyUser}}>
            {children}
        </SocietyUserContext.Provider>
    )

}