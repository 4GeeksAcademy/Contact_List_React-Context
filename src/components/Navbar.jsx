import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contacts">Contact List</Link></li>
                <li><Link to="/add-contact">Add Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
