import React from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import { ResetValidation } from '../validation/Validation';
import Link from 'next/link'

import {url} from '../helper/urls'
import { notification } from 'antd';
import { useRouter } from 'next/router';


export default function Change(){
  const [Token, setToken] = React.useState(()=>{
    if(typeof window !="undefined"){
        return localStorage.getItem('user')
    }})
    
const router = useRouter()
    const formik = useFormik({
      validationSchema: ResetValidation,
      initialValues: {
        password1: '',
        password2: '',
      },
      onSubmit: async (values, actions) => {
        const { password1, password2 } = values;
        try {
          const response = await axios.post(`${url}/password/change`, { password: password1, confirmPassword: password2, Token });
          if(response.status === 201){
            notification.success({
              message:"Success Trip",
              description:response.data,
              duration:5000,
            });
            router.push('/dashboard/order')
          }else{
            notification.error({
              message:"Bad Request",
              description:response.data,
              duration:5000,
            });
          }
        }catch(err){
          notification.error({
            message:"Bad Request",
            description:err.response.data || err.message,
            duration:5000,
          });
        }
  
      },
    });
  
    return (
      <>
 
        <div className='w-full h-screen flex  justify-center'>
          <div className="w-9/11 mb-4 md:w-1/3">
            <form onSubmit={formik.handleSubmit}>
            
                <h2 className='text-center font-bold text-3xl py-6 uppercase'>Change Password</h2>
              
              <div className="flex flex-col py-3 ">
                <input type="password" placeholder="Password" className="h-12 p-3" name="password1" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.password1 && formik.errors.password1 ? <span className="text-red-500">{formik.errors.password1}</span> : null}
              </div>
              <div className="flex flex-col py-3">
                <input type="password" className="h-12 p-3" placeholder="Confirm Password "  name="password2" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.touched.password2 && formik.errors.password2 ? <span className="text-red-500">{formik.errors.password2}</span> : null}
              </div>
  
              <button type="submit" className="bg-green-500 rounded-xl p-3 text-white text-xl font-bold ">Submit</button>
            </form>
          </div>
        </div>
       
      </>
    );
}