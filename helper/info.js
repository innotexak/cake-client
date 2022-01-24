import axios from "axios"
import { url } from "./urls"

export const userObj=async ()=>{
    if(typeof window !='undefined'){
        let token = localStorage.getItem('user')
        const value = await axios.get(`${url}/user/${token}`)
        if(value.status ===200){
            return value.data
          }else{
              return 
          }
        }
}