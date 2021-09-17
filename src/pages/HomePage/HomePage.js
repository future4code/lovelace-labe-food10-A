import React from "react"

import { BASE_URL } from "../../constants/urls"
import { useState, useEffect } from "react"
import axios from 'axios'
import {Link, useHistory} from 'react-router-dom'

const HomePage = () => {
    const [restaurants, setRestaurants] = useState([])
    let history = useHistory()
    const [filtered, setFiltered] = useState(false)
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    // função para pegar os restaurantes
    const getRestaurants = () => {
        axios.get(`${BASE_URL}/restaurants`, {headers : {
            auth: localStorage.getItem('token')
        }}).then((response) => {
            console.log('resposta', response.data.restaurants)
            setRestaurants(response.data.restaurants)
            
        }).catch((err) => {
            console.log(err)
        })
    }

    const FilterRestaurants = (item) => {
     setFiltered(true)
     let FilteredRestaurants = restaurants.filter(function (el) {
         return el.category == item.category
         
     })
     setFilteredRestaurants(FilteredRestaurants)
     console.log('restaurantes filtrados', FilteredRestaurants)
    }
   

    useEffect(() => {
        getRestaurants()
    
    },[])

    return (
        <>
        <div>
            home page
        </div>
        <div>{restaurants.map((item, index) => (
            <button key={index} onClick={() => {FilterRestaurants(item)}}>{item.category}</button>
        ))}</div>
        <div>{filtered ? filteredRestaurants.map((item, index) => (
            <div key={index}><p>{item.name}</p> <p>{item.description}</p> <img src={item.logoUrl}/><button onClick={() => history.push(`/restaurantes/${item.id}`)}>Ver cardápio</button></div>
        )) : restaurants.map((item,index) => (
            <div key={index}><p>{item.name}</p> <p>{item.description}</p><img src={item.logoUrl}/> <button onClick={() => history.push(`/restaurantes/${item.id}`)}>Ver cardápio</button></div>
        ))}</div>
        </>
    )
}
export default HomePage