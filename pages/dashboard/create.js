import OrderCreation from "../../components/orderCreationComp";
import SideMenu from "./sideMenu";

export default function CreateOrder(){
    return (
        <>
        <div className="w-full h-screen flex">
       
      <SideMenu/>
        <div className="w-full h-screen border-gray-500 border-4">
            <div className="w-full h-20 bg-gray-300 border-4 ">
                <h2 className="text-3xl font-bold p-3"> Create Order</h2>
            </div>
          <div>
            <OrderCreation/>   
          </div>
        </div>
        </div>
        </>
    )
}