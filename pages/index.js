import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Body from '../components/Body'



export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
   
      <Body/>
      <Footer/>
    </div>
  ) 
}
