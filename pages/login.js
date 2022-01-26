import React from 'react'
import axios from 'axios';
import { useFormik } from 'formik';
import { LoginValidation } from '../validation/Validation';
import Link from 'next/link'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { url } from '../helper/urls';
import {notification} from 'antd'
import {useRouter} from "next/router"

export default function Login(){
  const router = useRouter()
    const formik = useFormik({
        validationSchema: LoginValidation,
        initialValues: {
          email: '',
          password: '',
        },
        onSubmit: async (values, actions) => {
          const email = values.email
          
          try {
            const response = await axios.post(`${url}/login`, values);
            if (response.status === 200) {
              let Token = response.data
              const data =  Token ;
              if(typeof window != "undefined"){
                localStorage.setItem("user", data)
              }
              notification.success({
                message:"Logged In!",
                description: 'Success. Redirecting, please wait',
                duration:4,
              });
              router.push('/profile')
            }
          } catch (err) {
            if (err) {
              console.log(err.response.data)
              notification.error({
                message:"User Error",
                description:err.response.data || err.message,
                duration:4,
              })
            }
          }
          actions.setSubmitting(false);
        },
      });
    
      return (
        <>
        <Navbar/>
          <div className='w-full h-screen flex  justify-center mt-20'>
            <div className="w-9/11 h-auto mb-4 md:w-1/3   ">
                <h2 className='text-center font-bold text-3xl py-6 uppercase'>Login</h2>
            
              <form onSubmit={formik.handleSubmit}>
         
    
                <div className="flex flex-col py-3 ">   
                  <input type="email" placeholder="Email" className='h-12 px-3' name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                  {formik.touched.email && formik.errors.email ? <span className="text-red-300">{formik.errors.email}</span> : null}
                </div>
                <div className="flex flex-col py-3">
                  <input type="password" placeholder="Password " className='h-12 px-3' name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                  {formik.touched.password && formik.errors.password ? <span className="text-red-300">{formik.errors.password}</span> : null}
                </div>
                <p className='flex flex-col md:flex-row justify-between mb-3'>
                  <Link href="/forgot"><a className="text-green-500">Forgot password?</a></Link>
                  
                  <p>
                    Not yet a member? <Link href="/register"><a className="text-green-500">Sign up</a></Link>
                  </p>
                </p>
                <button className="bg-green-500 rounded-xl p-3 text-white text-xl font-bold " type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
          {/* <Footer /> */}
          <Footer/>
        </>
      );
}