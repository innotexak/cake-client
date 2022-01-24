import Image from 'next/image'
import Link from 'next/link'    
export default function Hero(){
    return(
        <>
        <div className="bg-gray-100 w-full h-full border m-auto  border-2 md:flex md:justify-between ">
            <div className="flex my-20 mx-6 flex-col justify-center items-center h-full  md:h-96 md:mt-12 md:w-1/2 ">
                <h2 className="text-3xl font-bold uppercase text-center">We are professional bakers</h2>
                <h3 className="text-2xl py-3 text-center">Our Services and products are exceptional</h3>
                <h4 className="text-xl py-3 font-semibold text-center">A Trial Will Convince U</h4>
              <Link href="/register">
                  <a className="bg-gray-700 border border-4  border-slate-500 hover:text-red-500 rounded-xl text-xl text-red-300 font-semibold p-3 ">Get Started</a>
              </Link>
            </div>
            <div className="w-full h-full  md:w-1/2"> 
            <Image src="/images/baking.jpg" alt="logo" className="object-contain " height="500" width="700"/>
            </div>
        </div>
        </>
    )
}