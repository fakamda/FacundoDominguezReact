import "./navbar.css"
import Button from "../Button/Button"
import CartWidget from "../CartWidget/CartWidget"

const Navbar = () => {
    return (
        <nav className="flex justify-evenly items-center bg-transparent h-16">
            {/* <img src={logo} alt='logo' className=" w-20"/> */}
            <h1 className=" text-white text-3xl w-30 font-thin">logo</h1>
            <div className="justify-center">
                <Button label="Celulares" callback={() => console.log('Celulares')} />
                <Button label="Notebooks" callback={() => console.log('Notebooks')} />
                <Button label="Tablets" callback={() => console.log('Tablets')} />
            </div>
            <CartWidget/>
        </nav>
    )
}

export default Navbar