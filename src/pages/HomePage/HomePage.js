import React from "react"
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/urls"
import { useState, useEffect } from "react"


const HomePage = () => {

    const restaurants = useRequestData([], `${BASE_URL}/restaurants`)
    const [state, setState] = useState([])
    const categories = []

    useEffect(() => {
        console.log(restaurants)
        setState(restaurants)
        console.log("estado", state)
        state.map((item) => {
            categories.push(item.category)
        })
    },[])


    console.log(categories)
    return (
        <div>
            home page
        </div>
    )
}
export default HomePage