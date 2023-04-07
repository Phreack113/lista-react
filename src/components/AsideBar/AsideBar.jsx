import { NavLink } from 'react-router-dom'
import './AsideBar.css'


function AsideBar() {
    return (
        <div class="asideBar">
            <NavLink to="/">
                <div className="logoContainer">
                    <img className="logo" src="./img/logo.png" alt="logo" />
                </div>
            </NavLink>
            <ul>
                <NavLink to="/listas-ventas" className="navText">
                    <li>
                        <div className="navIcon">
                            <img src="./img/list-text.png" alt="lista" />
                        </div>
                        <p>Listas ventas</p>
                    </li>
                </NavLink>
                <NavLink to="/clientes" className="navText">
                    <li>
                        <div className="navIcon">
                            <img src="./img/contact.png" alt="clientes" />
                        </div>
                        <p>Clientes</p>
                    </li>
                </NavLink>
                <NavLink to="/precios" className="navText">
                    <li>
                        <div className="navIcon">
                            <img src="./img/lupa.png" alt="lupa" />
                        </div>
                        <p>Buscador precios</p>
                    </li>
                </NavLink>
                <br />
                <NavLink to="/listas-proveedores" className="navText">
                    <li>
                        <div className="navIcon">
                            <img src="./img/list-text.png" alt="lista" />
                        </div>
                        <p>Listas proveedores</p>
                    </li>
                </NavLink>
                <NavLink to="/proveedores" className="navText">
                    <li>
                        <div className="navIcon">
                            <img src="./img/contact.png" alt="clientes" />
                        </div>
                        <p>Proveedores</p>
                    </li>
                </NavLink>
                <NavLink to="/costos" className="navText">
                    <li>
                        <div className="navIcon">
                            <img src="./img/lupa.png" alt="lupa" />
                        </div>
                        <p>Buscador costos</p>
                    </li>
                </NavLink>
            </ul>

        </div>
    )
}

export default AsideBar