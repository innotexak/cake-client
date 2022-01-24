import axios from "axios"
import React from "react"
import SideMenu from "./sideMenu"
import { url } from "../../helper/urls"
import Head from "next/head"

export default function Order(){
    const [data, setData]= React.useState([])
    const [token, setToken] = React.useState(()=>{
        if(typeof window !="undefined"){
            return localStorage.getItem('user')
        }
    })
    React.useEffect(()=>{
        const fetchOrders = async ()=>{
            try{
             
                const response = await axios.get(`${url}/data/${token}`)
               if(response){
                setData(response.data)
               }else{
                   return;
               }
            }catch(err){
                console.log(err.message)
            }
          
        }
        fetchOrders()
    },[token])
   
    
    return(
        <>
        <div className="w-full h-screen flex">
        <SideMenu/>
      
        <div className="w-auto h-auto border-gray-500 border-4 overflow-auto">
            <div className="w-full h-20 bg-gray-300 border-4 ">
                <h2 className="text-3xl font-bold p-3"> Order</h2>
            </div>
            {data.length <= 0 ? <div className="w-auto h-auto my-5">
               <div className="flex justify-center h-1/2 my-4 text-md font-semibold  text-gray-700 ">You have not made any other, please click create to make an order</div>
            </div>:
            <div className="w-screen h-9/11" >
            <h1 className="m-12 text-3xl font-bold  uppercase  ">Order Details</h1>
               <table className="table-auto  m-12">
                   <thead>
                       <tr>
                           <th className="px-3">Cake Name</th>
                           <th className="px-3">Cake Size</th>
                            <th className="px-3">Cake Colors</th>
                           <th className="px-3">Cake Prize</th>
                           <th className="px-3">Delivery Date</th>
                           <th className="px-3">Status</th>
                       </tr>
                   </thead>
                   <tbody >
                       {data.map(item=>{
                           return (
                               <>
                            
                                <tr className="border-2 my-4" key={item._id}>
                                    <td className="px-3">{item.cakeName}</td>
                                    <td className="px-3">{item.cakeSize}</td>
                                    <td className="px-3">{item.cakeColors}</td>
                                    <td className="px-3">{item.cakePrize}</td>
                                    <td className="px-3">{item.deliveryDate}</td>
                                    <td className="px-3"><button className={item.status==="successful"? "bg-green-500 text-white rounded-md p-2 m-2":"rounded-md bg-gray-700 text-white p-2 m-2"}>{item.status}</button></td>
                                </tr>
                        
                               </>
                           )
                       })}
                       
                  </tbody>
               </table>
            </div>
            }
        </div>
        </div>
        </>
    )
}


