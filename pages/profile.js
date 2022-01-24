import React from "react";
import axios from 'axios'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { url } from "../helper/urls";
import Image from 'next/image'
import { getLocal } from "../context/LocalPersist";




export default function Profile(){
    const localUser = ()=>{
        if(typeof window != 'undefined'){
        return localStorage.getItem('user')
    }}
const [profile, setProfile] = React.useState([])
const [token, setToken] = React.useState(localUser())


React.useEffect(()=>{
    const getUser = async ()=>{
        try{
            const response = await axios.get(`${url}/user/${token}`)
           if(response){
               let formatedResponse =[]
               formatedResponse.push(response.data)
            setProfile(formatedResponse)
           }else{
               console.log("Nothing")
           }
        }catch(err){
            console.log(err.message)
        }
      
    }
    getUser()
},[token])
    return(
        <>
        <Navbar/>
        <div className="w-full h-auto flex justify-center items-center">
        
            <div className="flex flex-col justify-center items-center w-9/11 h-auto ">
                {profile.map((item)=>{
                    return(<>
                    <h1 className="text-3xl uppercase text-gray-700 mt-12 font-bold">My Information</h1>
                        <div key={item.email} className="w-full mb-12 p-6  md:flex md:justify-center md:items-center">
                            <div>
                                <Image src='/images/defaultImage.png' className="object-cover" alt="profile pic" width="300" height="300"/>
                            </div>
                            <div className=" text-2xl font-nromal md:ml-4">
                                <h2 className="md:flex md:flex-col"><span>First Name</span> <p className="text-blue-300"> {item.firstName}</p></h2>
                                <h2 className="md:flex md:flex-col"><span>Last Name</span> <p className="text-blue-300">{item.lastName}</p></h2>
                                <h2 className="md:flex md:flex-col"><span>Phone Number</span><p className="text-blue-300"> {'+'+item.phoneNumber}</p></h2>
                            </div>
                        </div>
                        </>
                    )
                })}
            </div>
        </div>
        <Footer/>
        </>
    )
}