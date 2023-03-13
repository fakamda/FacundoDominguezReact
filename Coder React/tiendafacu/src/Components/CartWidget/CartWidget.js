import { BsCart2 } from "react-icons/bs";
import "./CartWidget.css"

const CartWidget = () => {
    return (
        
        <div className="text-white">
            <button className="btn-cart text-2xl bg-inherit text-center text-white border-white w-16 h-10 flex justify-center items-center gap-3">
                <BsCart2/>
                <p className="text-base text-center"> 0 </p>
            </button>
   
        </div>
    )
}

export default CartWidget