import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
            <div className="nav">
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/bug">Bugs</Link>
                    <Link to="/fish">Fish</Link>
                    <Link to="/seaCritters">Sea Creatures</Link>
                </ul>
                
            </div>
        </nav>
        <div className="hero">
            <img src="https://i.imgur.com/JGxNSzt.png" alt="Bell logo" />
            <h1>Bell Stacking</h1>
        </div>
        </div>
    )
};

export default Navbar;