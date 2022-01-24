import axios from 'axios';
import { useFormik } from 'formik';
import { RegisterValidation } from '../validation/Validation';
import Link from 'next/link'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { notification } from 'antd';
import {useRouter} from 'next/router'
import { url } from '../helper/urls';

export default function Registeration(){
  const router = useRouter()
    const formik = useFormik({
        validationSchema: RegisterValidation,   
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
          password1: '',
          password2: '',
          phoneNumber:'',
        },
        onSubmit: async (values, actions) => {
          const { firstName, lastName, email, password1, password2, phoneNumber } = values;
          console.log(values)
          try {
            const response = await axios.post(`${url}/register`, { firstName, lastName, email, phoneNumber, password: password1, confirmPassword: password2 });
            console.log(response)
            if (response.status === 201) {
              notification.success({
                message:"User Created",
                description: response.data,
                duration:5000,
              });
                router.push('/login');
            
            } else {
              notification.error({
                message:"Bad Request",
                description: response.data,
                duration:5000,
              });
            }
          } catch (err) {
            if (err) {
              notification.error({
                message:"Bad Request",
                description:err.response.data || err.message,
                duration:5000,
              });
            }
          }
          actions.setSubmitting(true);
        },
      });
    
      return (
        <>
        <Navbar/>
          <div  className='w-full h-auto flex  justify-center'>
            <div className="w-9/11 h-auto mb-4 md:w-1/3 ">
              <form onSubmit={formik.handleSubmit}>
                  <h2 className='text-center font-bold text-3xl py-6 uppercase'>Register</h2>      
                <div className="flex flex-col py-3 ">
                  <input type="email" placeholder="Email " className='h-12 px-3' name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                  {formik.touched.email && formik.errors.email ? (
                    <span style={{ color: 'red', fontSize: '14px', display: 'block' }}>{formik.errors.email}</span>
                  ) : null}
                </div>
                <div className="flex flex-col py-3 ">
                  <input type="text" placeholder="First Name " className='h-12 px-3' name="firstName" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <span style={{ color: 'red', fontSize: '14px', display: 'block' }}>{formik.errors.firstName}</span>
                  ) : null}
                </div>
                <div className="flex flex-col py-3 ">
                  <input type="text" placeholder="Last Name" className='h-12 px-3' name="lastName" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <span style={{ color: 'red', fontSize: '14px', display: 'block' }}>{formik.errors.lastName}</span>
                  ) : null}
                </div>
                <div className="flex flex-col py-3 ">
                  <input type="number" placeholder="Phone Number" className='h-12 px-3' name="phoneNumber" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                  {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                    <span style={{ color: 'red', fontSize: '14px', display: 'block' }}>{formik.errors.phoneNumber}</span>
                  ) : null}
                </div>
                <div className="flex flex-col py-3 ">
                  <input type="password" placeholder="Password " className='h-12 px-3' name="password1" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                  {formik.touched.password1 && formik.errors.password1 ? (
                    <span style={{ color: 'red', fontSize: '14px', display: 'block' }}>{formik.errors.password1}</span>
                  ) : null}
                </div>
                <div className="flex flex-col py-3 ">
                  <input type="password" placeholder="Confirm Password " className='h-12 px-3' name="password2" onChange={formik.handleChange} onBlur={formik.handleBlur} />
                  {formik.touched.password2 && formik.errors.password2 ? (
                    <span style={{ color: 'red', fontSize: '14px', display: 'block' }}>{formik.errors.password2}</span>
                  ) : null}
                </div>
                <p className='flex flex-col md:flex-row  justify-between my-6'>
                  <button className="bg-green-500 rounded-xl p-3 text-white text-xl font-bold " type="submit">
                    Signup
                  </button>
                  <span>
                    Already a member? <Link href="/login"><a className="text-green-500">Login</a></Link>
                  </span>
                </p>
              </form>
            </div>
          </div>
          <Footer/>
        </>
      );
}