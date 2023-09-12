import { Link } from "react-router-dom";

function Navbar() {

    return (
        <nav className="navbar bg-primary text-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                <p>WikiCountries</p>
                </Link>
                </div>

        </nav>
    )
}

export default Navbar;
