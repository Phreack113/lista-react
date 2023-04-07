import './Main.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import ListaVentas from './ListasVentas/ListasVentas'
import ListasProveedores from './ListasProveedores/ListasProveedores'
import Proveedores from './Preveedores/Preveedores'
import Clientes from './Clientes/Clientes'
import BuscadorCostos from './BuscadorCostos/BuscadorCostos'
import BuscadorPrecios from './BuscadorPrecios/BuscadorPrecios'
import Home from './Home/Home'

function Main() {
    return (
        <div className="main">
            <Routes>
                <Route
                    path='/'
                    element={<Home />}
                    />
                <Route
                    path='/listas-ventas'
                    element={<ListaVentas />}
                    />
                <Route
                    path='/clientes'
                    element={<Clientes />}
                    />
                <Route
                    path='/precios'
                    element={<BuscadorPrecios />}
                    />
                <Route
                    path='/listas-proveedores'
                    element={<ListasProveedores />}
                    />
                <Route
                    path='/proveedores'
                    element={<Proveedores />}
                    />
                <Route
                    path='/costos'
                    element={<BuscadorCostos />}
                    />
            </Routes>
        </div>
    )
}

export default Main