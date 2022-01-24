import Link from 'next/link'

export default function SideMenu(){
    return(
        <>
        <div className=" w-1/6 h-screen bg-gray-500 text-white">
            <div className='text-sm flex flex-col text-center md:text-xl justify-center py-12'>
            <Link href="/">
                <a className="my-4 hover:text-red-500 focus:bg-red-200" >Home</a>
                </Link>
                
                <Link href="/dashboard/order">
                <a className="my-4 hover:text-red-500">Orders</a>
                </Link>
                <Link href="/dashboard/create">
                <a className="my-4 hover:text-red-500">Create</a>
                </Link>
                <Link href="/dashboard/history">
                <a className="my-4 hover:text-red-500">Receipt</a>
                </Link>
            </div>
        </div>
        </>
    )
}