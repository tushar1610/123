import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GuardContext = React.createContext()

const getAllGuardsUrl = "http://localhost:8080/guard/get/all"
const addGuardUrl = "http://localhost:3000/guard/add"

export const GuardContextProvider = ({children}) => {

    const navigate = useNavigate()

    const [allGuardsFetched, setAllGuardsFetched] = useState([])
    const [guardUser, setGuardUser] = useState()

    const addGuard = async(url, body) => {
        await axios.post(url, body)
        .then((response) => {
            console.log(response.data)
            navigate("/login")
        })
        .catch((error) => {
            console.log(error.response)
        })
    }

    useEffect(() => {
        if(guardUser){
            addGuard(addGuardUrl, guardUser)
        }
    }, guardUser)

    // const getAllGuards = async() => {

    // }

    return(
        <GuardContext.Provider value={setGuardUser}>
            {children}
        </GuardContext.Provider>
    )

}