import React from 'react';
import { useFormik } from 'formik';
import { EmailValidation } from '../validation/Validation';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { url } from '../helper/urls';
import { notification } from 'antd';
import { useRouter } from 'next/router';

export default function ForgotPassword() {
  const router = useRouter()
  const formik = useFormik({
    validationSchema: EmailValidation,
    initialValues: {
      email: '',
    },
    onSubmit: async (values, actions)=>{
      
      try{
        const response = await axios.post(`${url}/password/forgot`, values);
        if(response.status === 200){
          if(typeof window !== "undefined"){
            localStorage.setItem('user', response.data)
          }
          notification.success({
            message:"User Found",
            description:"You can now reset your password",
            duration:5000,
          });
          router.push('/preset')
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

    }
  });

  return (
    <>
    <Navbar/>
      <div className='w-full h-screen flex  justify-center'>
        <div className="w-9/11 mb-4 md:w-1/3 ">
          <form onSubmit={formik.handleSubmit}>
           
              <h2 className='text-center font-bold text-3xl py-6 uppercase'>Forgot Password</h2>
    
            <div className="flex flex-col py-3 ">
              <input type="email" className="h-12 px-3" placeholder="Email " name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} />
              
              {formik.touched.email && formik.errors.email ? <span className="text-red-500">{formik.errors.email}</span> : null}
             <p className='flex justify-end'>
              <button type="submit" className="bg-green-500 rounded-xl p-3 w-auto text-white text-xl font-bold ">
                Submit
              </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    <Footer/>
    </>
  );
}
