import { Link } from "react-router-dom";
import './style.css';

function Menu() {
    return (
        <nav className="menu">
            <div className="menu-logo">
                <Link to="/">LPII</Link>
            </div>
            <div className="menu-links">
                <Link to="/">Home </Link>
                <Link to="/Produto">Lista de produtos</Link>
            </div>
        </nav>
    )
}
export default Menu;