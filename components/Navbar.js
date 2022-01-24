import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {useRouter} from 'next/router'



export default function Navbar(){
    const router = useRouter()
    const [user, setUser] = React.useState(()=>{
       
        if(typeof window != "undefined"){
            return localStorage.getItem('user')
        }
    })
     
    const logOut= ()=>{
        // if(typeof window != 'undefined'){
            localStorage.clear();
            localStorage.removeItem('user');
            router.push('/');
        // }
    }
    return (
        <>
        <div className="w-full  bg-gray-500 flex justify-between items-center static top-0 ">
           <div>
           <Image src='/images/cake2.png' alt="logo" className='mt-10' width="190" height="100"/>
           </div>
            <ul className="flex justify-end items-center text-white text-xl mt-8 bg-gray-500">
                <li className="mx-3 hover:text-red-300">
                    <Link href="/" >
                        <a >Home</a>
                    </Link>
                </li>
               {!user &&<>
                <li className="mx-3 hover:text-red-300">
                    <Link href="/login">
                        <a>Login</a>
                    </Link>
                </li>
                <li className="mx-3 hover:text-red-300">
                    <Link href="/register">
                        <a>Register</a>
                    </Link>
                </li>
               </>}{ user &&<> 
               <li className="mx-3 hover:text-red-300"> 
                    <Link href="/profile">
                        <a >Profile</a>
                    </Link>
                </li>
               <li className="mx-3 hover:text-red-300">
                    <Link href="/dashboard/order">
                        <a >Dashboard</a>
                    </Link>
                </li>
                
                    <li className="mx-3 hover:text-red-300 pb-3">
                    <button className="bg-red-400 rounded-md p-2 text-white" type="submit" onClick={logOut}>
                        Logout
                    </button>
                </li>
                </>}
            </ul>

        </div>
        </>
    )
}