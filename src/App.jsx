import { BrowserRouter } from 'react-router-dom'
import './App.css'

import AsideBar from "./components/AsideBar/AsideBar"
import Search from "./components/Search/Search"
import Main from "./components/Main/Main"
import User from "./components/User/User"

function App (){
    return (
        <div class="container">
            <AsideBar />
            <div className="fixed">
                <Search />    
                <User />
            </div>
            <Main />
        </div>
    )
}

export default App