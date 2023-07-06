import {NavLink} from "react-router-dom"
import "./NavBar.css"
export function NavBar(){
    return(
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Buscador">Buscador</NavLink>
            <NavLink to="MiEquipo">Mi Equipo</NavLink>
        </nav>
    )
}