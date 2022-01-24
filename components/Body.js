import Image from 'next/image'
export default function Body(){
    return(<>
        <h1 className="p-5 m-5 text-center h-auto text-3xl font-bold uppercase  ">Sample Products </h1>
        <div className="w-9/11 h-auto md:flex justify-around items-center m-12 border-2  ">
            <div className="w-full h-auto lg:w-1/4 text-center sm:mt-10 shadow-xl ">
                <div className="">
                    <Image src="/images/sp2.jpg" className="object-cover" alt="sample 1" height="500" width="500"/>
                </div>
                <div className='w-full h-full text-md border-x-4 border-gray-500 p-     3'>
                <h2>Features - 100% customable</h2>
                    <ul className="flex justify-center ">
                        <li>Available Sizes - </li>
                    <li className="mx-2 ">Small, </li>
                    <li className="mx-2 ">Medium,</li>
                    <li>Large </li>
                    </ul>
                    <h2>Color - Choose any color combinations</h2>
                </div>

            </div>
            <div className="w-full my-6 h-auto lg:w-1/4 text-center  sm:mt-10 shadow-xl  ">
                <div className="">
                    <Image src="/images/sp1.jpeg" className="object-cover" alt="sample 1" height="500" width="500"/>
                </div>
                <div className='w-full h-full text-md border-x-4 border-gray-500 p-3'>
                    <h2>Features - 100% customable</h2>
                    <ul className="flex justify-center ">
                        <li>Available Sizes - </li>
                    <li className="mx-2 ">Small, </li>
                    <li className="mx-2 ">Medium,</li>
                    <li>Large </li>
                    </ul>
                    <h2>Color - Choose any color combinations</h2>
                </div>

            </div>
            <div className="w-full h-auto lg:w-1/4 text-center  sm:mt-10 shadow-xl ">
                <div className="">
                    <Image src="/images/sp3.jpg" className="object-cover" alt="sample 1" height="500" width="500"/>
                </div>
                <div className='w-full h-full text-md border-x-4 border-gray-500 p-3'>
                <h2>Features - 100% customable</h2>
                    <ul className="flex justify-center ">
                        <li>Available Sizes - </li>
                    <li className="mx-2 ">Small, </li>
                    <li className="mx-2 ">Medium,</li>
                    <li>Large </li>
                    </ul>
                    <h2>Color - Choose any color combinations</h2>
                </div>

            </div>
        </div>
        </>
    )
}