import React from 'react';
import { notification } from 'antd';
import axios from 'axios';
import { useFormik } from 'formik';
import { FormValidation } from '../validation/Validation';
import Flutter from './Payment';
import { url } from '../helper/urls';
import { useRouter } from 'next/router';
import { userObj } from '../helper/info';
const localUser = ()=>{
  if(typeof window != 'undefined'){
  return localStorage.getItem('user')
}}

const res = userObj(localUser())
export default function OrderCreation(){
  const [data, setData] = React.useState('')
  const [togger, setToggler] = React.useState('form')
  const [token, setToken] = React.useState(localUser())
  const [info, setInfo] = React.useState('')
  
React.useEffect(()=>{
  const userObj=async ()=>{
    if(typeof window !='undefined'){
        let token = localStorage.getItem('user')
        const value = await axios.get(`${url}/user/${token}`)
        if(value.status ===200){
            setInfo(value.data)
          }else{
              return 
          }
        }
}
userObj()
},[])
    const formik = useFormik({
        validationSchema: FormValidation,   
        initialValues: {
          cakeName: '',
          cakeSize: '', 
          deliveryDate: '',
          cakeColors: '',
        },
        onSubmit: async(values, actions) => {
          const {cakeSize, cakeColors, deliveryDate, cakeName} = values
          const Token = localStorage.getItem('user')
          setData(cakeSize)
          try {
            var cakePrize =''
            if(cakeSize ==='4000'){
               cakePrize = "Small"
            }else if(cakeSize === '5000'){
              cakePrize = "Medium"
            }else{
              cakePrize = "Large"
            }
            const response =  await axios.post(`${url}/order/create`, 
            { 
              cakeName, 
              cakeSize:cakePrize,
              cakePrize:cakeSize,
              cakeColors, 
              deliveryDate,   
              status:'processing',
              Token,
            });  
            if (response.status === 201) {
              notification.success({
                message:'Info',
                description:response.data,
                duration:5000,
              });
              setToggler('pay')
           
            } else {
              notification.error({
                message:'Bad Request',
                description:response.data,
                duration:5000,
              });
            }
          } catch (err) {
            if (err) {
              notification.error({
                message:'Bad Request',
                description:err.response.data || err.message,
                duration:5000,
              });
            }
          }
          actions.setSubmitting(false);
        },
      });
    
      return (
        <>
         { togger ==="form" &&<div  className='w-full h-screen flex  justify-center'>
            <div className="w-9/11 mb-4 md:w-1/3 ">
              <form onSubmit={formik.handleSubmit}>
                  <h2 className='text-center font-bold text-3xl py-6 uppercase'>Order Form</h2>      
                <div className="flex flex-col py-3 ">
                  <input type="text" placeholder="Name on cake " className='h-12 px-3' name="cakeName" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                  {formik.touched.cakeName && formik.errors.cakeName ? (
                    <span style={{ color: 'red', fontSize: '14px', display: 'block' }}>{formik.errors.cakeName}</span>
                  ) : null}
                </div>
                <div className="flex flex-col py-3 ">
                  <input type="text" placeholder="Choose your colors " className='h-12 px-3' name="cakeColors" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                  {formik.touched.cakeColors && formik.errors.cakeColors ? (
                    <span style={{ color: 'red', fontSize: '14px', display: 'block' }}>{formik.errors.cakeColors}</span>
                  ) : null}
                </div>
                <div className="flex flex-col py-3 ">
                 Select Delivery Date
                 <input type="date" placeholder="Please pick a date " className='h-12 px-3' name="deliveryDate" onChange={formik.handleChange} onBlur={formik.handleBlur} />
            
              {formik.touched.deliveryDate && formik.errors.deliverydDate ? (
                <span style={{ color: 'red', fontSize: '14px', display: 'block' }}>{formik.errors.deliveryDate}</span>
              ) : null}
            </div>
                <h2>Cake Size</h2>
                <div className="flex flex items-center  ">
                 <span className='flex justify-start items-center p-3'>  
                 <h2 className="px-2">Small</h2> <input type="radio" value="4000" placeholder="e.g small, medium or large" className='h-12 ' name="cakeSize" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                     
                </span>
                <span className='flex justify-start items-center '>  
                 <h2 className="px-2">Medium</h2> <input type="radio" value="5000" placeholder="e.g small, medium or large" className='h-12 ' name="cakeSize" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                     
                </span>
                <span className='flex justify-start items-center p-3'>  
                 <h2 className="px-2">Large</h2> <input type="radio" value="6000" placeholder="e.g small, medium or large" className='h-12 ' name="cakeSize" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                     
                </span>
                  {formik.touched.cakeSize && formik.errors.cakeSize ? (
                    <span style={{ color: 'red', fontSize: '14px', display: 'block' }}>{formik.errors.cakeSize}</span>
                  ) : null}
                </div>
                   { formik.values.cakeSize !='' && <div className="flex justify-end text-xl font-bold">
                     <h2>Prize : <span className='text-red-500'> N{formik.values.cakeSize}</span></h2>
                 </div>}
                
                 <button className="bg-green-500 rounded-xl p-3 text-white text-xl font-bold" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>}
          {togger ==="pay" && <div className='flex justify-center items-center h-96'><Flutter value={data } info={info}/></div>}
          
        </>
      );
}