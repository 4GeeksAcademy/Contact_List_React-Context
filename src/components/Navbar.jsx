import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar-container">
            <nav className="navbar">
                <ul>
                    <li><Link to="/" style={{ color: "black" }}>Home</Link></li>
                    <li><Link to="/contacts" style={{ color: "black" }}>Contact List</Link></li>
                    <li><Link to="/add-contact" style={{ color: "black" }}>Add Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;

