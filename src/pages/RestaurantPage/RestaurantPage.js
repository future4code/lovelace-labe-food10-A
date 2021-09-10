import React, {useState, useEffect} from "react"
import axios from 'axios'
import { BASE_URL } from "../../constants/urls"
import { useParams } from "react-router"


const RestaurantPage=()=>{
    const id = useParams()
    const [restaurantInfo, setRestaurantInfo] = useState([])
    const [products, setRestaurantProducts] = useState([])
    const getRestaurantInfo = () => {
        axios.get(`${BASE_URL}/restaurants/${id.id}`, {headers : {
            auth: localStorage.getItem('token')
        }}).then((response) => {
            
            setRestaurantInfo(response.data.restaurant)
            setRestaurantProducts(response.data.restaurant.products)
            
            
            
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getRestaurantInfo()
      
    }, [])
    
    return(
        <>
        <div>
            home page
        </div>
        <div>
        {<div><p>{restaurantInfo.name}</p> <p>{restaurantInfo.description}</p> <img style={{height: 200, width: 250}} src={restaurantInfo.logoUrl}/></div>}
        {products.map((item,index) => (
            <div key={index}><img style={{height: 200, width: 250}} src={item.photoUrl}/> <p>{item.name}</p> <p>{item.description}</p> <p>R${item.price}</p></div>
        )
            
        )}
        </div>
        </>
    )
}
export default RestaurantPage