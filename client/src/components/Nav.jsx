import { NavLink, Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="flex-row">
            <div id="logo">
                <Link to="/"><img src={"https://i.imgur.com/JOZFXfe.png"} alt="Bells Logo" /></Link>
            </div>
            <div className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/bugs">Bugs</NavLink>
                <NavLink to="/fishes">Fish</NavLink>
            </div>
            
        </nav>
    )
}

export default Nav;