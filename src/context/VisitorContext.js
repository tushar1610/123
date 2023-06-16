import axios from "axios";
import React, { useEffect, useState } from "react";

export const VisitorContext = React.createContext()

const getAllVisitorsByDateUrl = "http://localhost:8080/visitor/get/all/date"
const getAllVisitorsUrl = "http://localhost:8080/visitor/get/all"
const getAllVisitorsByFlatNoUrl = "http://localhost:8080/visitor/get/all/flatNo/"

export const VisitorContextProvider = ({children}) => {

    const [dateToFetch, setDateToFetch] = useState('Today')

    const [visitorsFetchedByDate, setVisitorsFetchedByDate] = useState([])
    const [allVistorsFetched, setAllVisitorsFetched] = useState([])

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
                let tempVisitors = []
                data.forEach(visitor => {
                    tempVisitors.push(visitor)
                });
                setVisitorsFetchedByDate(tempVisitors)
                console.log(visitorsFetchedByDate)
            }
        } catch (error) {
            console.log(error.response)
        }
    }

    const getAllVisitors = async(url) => {
        try {
            const {data} = await axios.get(url);
            console.log(data)
            if(data){
                let tempVisitors = []
                data.forEach(visitor => {
                    tempVisitors.push(visitor)
                });
                setAllVisitorsFetched(tempVisitors)
                console.log(allVistorsFetched)
            }
        } catch (error) {
            console.log(error.response)
        }
    }

    useEffect(() => {
        if(dateToFetch !== 'See All'){
            const date = getDate(dateToFetch);
            getAllVisitorsByDate(getAllVisitorsByDateUrl, date)
        } else {
            getAllVisitors(getAllVisitorsUrl)
        }
    }, [dateToFetch])

    return(
        <VisitorContext.Provider value={{setDateToFetch, visitorsFetchedByDate, allVistorsFetched}}>
            {children}
        </VisitorContext.Provider>
    )

}