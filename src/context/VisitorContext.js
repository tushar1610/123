import axios from "axios";
import React, { useEffect, useState } from "react";

export const VisitorContext = React.createContext()

const getAllVisitorsByDateAndFlatNoUrl = "http://localhost:8080/visitor/get/all/date/and/flatNo"
const getAllVisitorsUrl = "http://localhost:8080/visitor/get/all"
const getAllVisitorsByDateUrl = "http://localhost:8080/visitor/get/all/date"
const getAllVisitorsByFlatNoUrl = "http://localhost:8080/visitor/get/all/flatNo"
const addVisitorUrl = "http://localhost:8080/visitor/add"
const updateVisitorApprovalUrl = "http://localhost:8080/visitor/update/approval/status/"

export const VisitorContextProvider = ({children}) => {

    const [dateToFetch, setDateToFetch] = useState('')
    const [addVisitor, setAddVisitor] = useState({})

    const [visitorsFetchedByDate, setVisitorsFetchedByDate] = useState([])
    const [allVistorsFetched, setAllVisitorsFetched] = useState([])
    const [approvedVisitor, setApprovedVisitor] = useState()

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

    const getAllVisitorsByDateAndFlatNo = async(url, date) => {
        try {
            let jwtToken = localStorage.getItem("jwtToken")
            const {data} = await axios.get(url, {
                params: {
                    date: date
                },
                headers: {
                    Authorization : "Bearer " + jwtToken
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
            let jwtToken = localStorage.getItem("jwtToken")
            const {data} = await axios.get(url, {
                headers: {
                    Authorization : "Bearer " + jwtToken
                }
            });
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
        if(dateToFetch !== ''){
            if(dateToFetch !== 'See All'){
                const date = getDate(dateToFetch);
                getAllVisitorsByDateAndFlatNo(getAllVisitorsByDateAndFlatNoUrl, date)
            } else {
                getAllVisitors(getAllVisitorsByFlatNoUrl)
            }
        }
    }, [dateToFetch])

    const createVisitor = async(url, body) => {
        let jwtToken = localStorage.getItem("jwtToken")
        await axios.post(url, body, {
            headers : {
                Authorization : "Bearer " + jwtToken
            }
        }).then((response) => {
            console.log(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        let guardRole = localStorage.getItem("guardRole")
        if(addVisitor && guardRole){
            console.log(addVisitor)
            createVisitor(addVisitorUrl, addVisitor)
        }
    }, [addVisitor])

    const updateVisitorApproval = async(url, body, jwtToken) => {
        await axios.put(url + `${body.visitorId}`, body, {
            headers: {
                Authorization : "Bearer " + jwtToken
            }
        }).then((response) => {
            console.log(response.data)
            alert("Guard has been notified.")
        }).catch((error) => {
            console.log(error.response)
        })
    }
    useEffect(() => {
        if(approvedVisitor){
            let jwtToken = localStorage.getItem("jwtToken")
            if(jwtToken) {
                updateVisitorApproval(updateVisitorApprovalUrl, approvedVisitor, jwtToken)
            }   
        }
    }, [approvedVisitor])

    return(
        <VisitorContext.Provider value={{setDateToFetch, visitorsFetchedByDate, allVistorsFetched, setAddVisitor, setApprovedVisitor}}>
            {children}
        </VisitorContext.Provider>
    )

}