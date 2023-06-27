import {NavLink} from "react-router-dom"

export function NavBar(){
    return(
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/Buscador">Buscador</NavLink>
            <NavLink to="MiEquipo">Mi Equipo</NavLink>
        </nav>
    )
}