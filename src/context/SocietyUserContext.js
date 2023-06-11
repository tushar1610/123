import React, { useEffect, useState } from "react"
import axios from 'axios'

export const SocietyUserContext = React.createContext()

const addSocietyUser = "http://localhost:8080/addSocietyUser"
const getSocietyUserById = "http://localhost:8080/getSocietyUserById"

export const SocietyUserProvider = ({children}) => {

    const [societyUser, setSocietyUser] = useState()
    // const [data, setData] = useState()
    //const [savedSocietyUser, setSavedSocietyUser] = useState()

    const postSocietyUser = async(url, body) => {
        try {
            console.log(body)
            const {data} = await axios.post(url, body)
            console.log(data)
            //setSavedSocietyUser(data)
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

    // const getSocietyUser = async(url, userId) => {
    //     try {
    //         console.log(userId)
    //         const {data} = await axios.get(url + `${userId}`)
    //         console.log(data)
    //     } catch (error) {
    //         console.log(error.response)
    //     }
    // }

    // useEffect(() => {
    //     if(savedSocietyUser) {
    //         console.log("getMethod called")
    //         getSocietyUser(getSocietyUserById, savedSocietyUser.user.userId)
    //     }
    // }, [savedSocietyUser])

    return (
        <SocietyUserContext.Provider value={{setSocietyUser}}>
            {children}
        </SocietyUserContext.Provider>
    )

}