import React from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

import {useRouter} from 'next/router'
import axios from 'axios';
import { url } from '../helper/urls';

export default function Flutter({info,value}) {
  const {firstName, lastName, phoneNumber, email} = info
  const name = `${firstName} ${lastName}`
  const router = useRouter()
  const config = {
    public_key: "FLWPUBK_TEST-10a1fbf044d7cd7a92ccc36a5d4f94b4-X",
    tx_ref: Date.now(),
    amount: value,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {     
      email: email,
      phonenumber: phoneNumber ,
      name:name,
    },
    customizations: {
      title: 'Cake Payment',
      description: 'Payment for Making Cake',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="App">
      <button className='bg-red-500 text-white rounded-md p-3 font-bold text-xl'
        onClick={ () => {
          handleFlutterPayment({
            callback: (response) => {
              if(response.status==="successful"){
              setTimeout(()=>{
                router.push('/dashboard/order')
              },3000)
              }
               
               
                
             
                closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {
             
            },
          });
        }}
      >
        Pay With FlutterWave
      </button>
    </div>
  );
}