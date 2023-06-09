import React, { useEffect, useState } from "react"
import axios from 'axios'

export const SocietyUserContext = React.createContext()

const addSocietyUser = "http://localhost:8080/addSocietyUser"

export const SocietyUserProvider = ({children}) => {

    const [societyUser, setSocietyUser] = useState()
    const [dataChanged, setDataChanged] = useState(false)

    const postSocietyUser = async(url, body) => {
        try {
            console.log(body)
            const {data} = await axios.post(url, body)
            console.log(data)
            setDataChanged(true)
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

    return (
        <SocietyUserContext.Provider value={{setSocietyUser}}>
            {children}
        </SocietyUserContext.Provider>
    )

}