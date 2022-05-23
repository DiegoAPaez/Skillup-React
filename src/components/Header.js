import { NavLink } from "react-router-dom"

function Header () {
    return (
        <header className="bg-slate-100 w-11/12 flex flex-wrap justify-between mx-auto p-2 rounded">
            <h1 className="text-lg font-semibold italic">Alkemy Challenge</h1>
            <nav>
                <ul className="flex flex-wrap">
                    <li className="mx-2">
                        <NavLink to={'/'}>Home</NavLink>
                    </li>
                    <li className="mx-2">
                        <NavLink to={'/listado'}>Listado</NavLink>
                    </li>
                    <li className="mx-2">
                        <NavLink to={'/contacto'}>Contacto</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header