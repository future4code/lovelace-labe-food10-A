import axios from "axios"
import {BASE_URL} from "../constants/urls"


export const Login = (body) => {
   
    axios.post(`${BASE_URL}/signup`, body)
        .then((res) => {
            console.log('res',res)
        })
        .catch((err) => {   
            alert(err)
        })
}