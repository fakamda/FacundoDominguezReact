


import { BsInstagram, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";


const Footer = () => {
    return (
        <footer>
            <div className=" bg-slate-900 w-full h-40 absolute bottom-0 mt-96 flex flex-col justify-evenly items-center">
                <div>
                    <p className="text-white text-xl">Contactanos via redes</p>
                </div>
                <div className="text-white text-xl flex flex-row gap-4">
                    <BsInstagram/> <BsFacebook/> <BsTwitter/> <BsLinkedin/>
                </div>
                <div>
                    <p className="text-white text-xs">Info | Support | About Us</p>
                </div>
                <div>
                    <p className="text-slate-600 text-xs">©E-commerce.inc. Todos los derechos reservados</p>
                </div>
            </div>
        </footer>
    )  
}

export default Footer