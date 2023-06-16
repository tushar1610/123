import axios from "axios";
import React, { useEffect, useState } from "react";

export const GuardContext = React.createContext()

const getAllGuardsByDateUrl = "http://localhost:8080/guard/get/all/date"
const getAllGuardsUrl = "http://localhost:8080/guard/get/all"

export const GuardContextProvider = ({children}) => {

    const [allGuardsFetched, setAllGuardsFetched] = useState([])

    return(
        <GuardContext.Provider value={{}}>
            {children}
        </GuardContext.Provider>
    )

}