import siteLogo from "../assets/logo-white.png"

import { NavBar } from "./NavBar"

export const Header = () =>{
    return(
        <div className="flex flex-row justify-between gap-10 p-[15px]">
            <img className="" src={siteLogo} alt="Logo" width={100} height={80} />
            <NavBar/>
            <button>Contacto</button>
            
        </div>
    )
} 