import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Projekat</h1>
            <div className="links">
                <Link to="/">Početna</Link>
                <Link to="/Zaglavlje">Zaglavlje</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;