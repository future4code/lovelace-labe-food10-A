import axios from "axios"
import {BASE_URL} from "../constants/urls"


export const SingUp = (body) => {
   
    axios.post(`${BASE_URL}/signup`, body)
        .then((res) => {
            console.log('res',res)
        })
        .catch((err) => {   
            alert(err)
        })
}

export const login = (body) => {
    
    axios.post(`${BASE_URL}/login`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            console.log(res.data)
        })
        .catch((err) => alert(err.response.data.massage))
}