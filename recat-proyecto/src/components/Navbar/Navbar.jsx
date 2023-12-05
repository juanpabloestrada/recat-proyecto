import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className='nav-containe'>
            <nav className='navbar'>
                <h1 className='navbar-logo'>Shop.</h1>
                <h2 className='mas-vendidos'>Los mas vendidos</h2>
                <h2 className='ofertas'>Ofertas</h2>
                <Link className='seeCarrito' to={"/cart"}>🛒</Link>
            </nav>
        </div>
    )
};

export default Navbar;