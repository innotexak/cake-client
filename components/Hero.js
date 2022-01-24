import Image from 'next/image'
import Link from 'next/link'    
export default function Hero(){
    return(
        <>
        <div className="bg-gray-100 w-full h-full border m-auto  border-2 md:flex md:justify-between ">
            <div className="flex flex-col justify-center h-96 md:h-96 md:w-1/2 items-center ">
                <h2 className="text-3xl font-bold uppercase ">We are professional bakers</h2>
                <h3 className="text-2xl py-3">Our Services and products are exceptional</h3>
                <h4 className="text-xl py-3 font-semibold">A Trial Will Convince U</h4>
              <Link href="/register">
                  <a className="bg-gray-200 border border-4  border-slate-300 hover:text-red-300 rounded-xl text-xl text-red-300 font-semibold p-3 ">Get Started</a>
              </Link>
            </div>
            <div className="w-full h-full  md:w-1/2"> 
            <Image src="/images/baking.jpg" alt="logo" className="object-contain " height="500" width="700"/>
            </div>
        </div>
        </>
    )
}