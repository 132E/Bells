import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/bugs">Bugs</NavLink>
            <NavLink to="/fish">Fish</NavLink>
            
        </nav>
    )
}

export default Nav;