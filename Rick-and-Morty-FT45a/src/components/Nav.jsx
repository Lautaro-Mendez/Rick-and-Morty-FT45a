import SearchBar from "./SearchBar"
import { NavLink } from "react-router-dom"

export default function Nav(props){
    
    return(
        <div>
            <NavLink to="/about">
                <button>About</button>
            </NavLink>
            <NavLink to="/home">
                <button>Home</button>
            </NavLink>
            <NavLink to="/favorites">
                <button>Favorites</button>
            </NavLink>
            {/* alternativa es poner un NavLink to "/" y meter el boton dentro, entonces no necesitas la funcion logout*/}
            <button onClick={props.logout}>LogOut</button>
            
            <hr />
            <SearchBar onSearch={props.onSearch}/>
            <hr />
        </div>
    )
}