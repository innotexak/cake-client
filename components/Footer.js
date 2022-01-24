export default function Footer(){
    return (
        <div className="w-full h-26 bg-gray-500 py-3 text-white md:flex  "> 
           <div className="w-full md:w-1/2 text-center text-xl font-semibold p-3">
               &copy; {new Date().getFullYear()}. All Rights Reserved
           </div>
           <div className="w-full md:w-1/2 text-center text-xl flex justify-around font-semibold hover:text-blue-200 p-3">
           <a href="https://facebook.com/innotexak" >Facebook</a>
            <a href="https://twitter.com/innotexak">Twitter</a>
            <a href="https://linkedin.com/in/innotexak" >Linkedin</a>
            <a href="https://github.com/innotexak" >Github</a>
           </div>
        </div>
    )
}

