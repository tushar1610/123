import axios from "axios";
import React, { useEffect, useState } from "react";

export const VisitorContext = React.createContext()

const getAllVisitorsByDateUrl = "http://localhost:8080/getAllVisitorsByDate"

export const VisitorContextProvider = ({children}) => {

    const [dateToFetch, setDateToFetch] = useState("Today")

    const [visitorsFetchedByDate, setVisitorsFetchedByDate] = useState([])

    const getDate = (dateToFetch) => {
        const currentDate = new Date();
        if(dateToFetch === 'Today'){
            const date = currentDate.toISOString().slice(0, 10);
            return date;
        }
        if(dateToFetch === 'Yesterday'){
            const yesterday = new Date(currentDate);
            yesterday.setDate(yesterday.getDate() - 1);
            const date = yesterday.toISOString().slice(0, 10);
            return date;
        }
    }

    const getAllVisitorsByDate = async(url, date) => {
        try {
            const {data} = await axios.get(url, {
                params: {
                    date: date
                }
            });
            console.log(data)
            if(data){
                setVisitorsFetchedByDate(data.visitors)
                console.log(visitorsFetchedByDate)
            }
        } catch (error) {
            console.log(error.response)
        }
    }

    useEffect(() => {
        if(dateToFetch !== 'See All'){
            const date = getDate(dateToFetch);
            getAllVisitorsByDate(getAllVisitorsByDateUrl, date)
        }// } else {
        //     // getAllVisitorsByDate(get)
        // }
    }, [dateToFetch])

    return(
        <VisitorContext.Provider value={{setDateToFetch, visitorsFetchedByDate}}>
            {children}
        </VisitorContext.Provider>
    )

}