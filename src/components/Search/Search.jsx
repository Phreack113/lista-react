import './Search.css'

function Search() {
    return (
        <div class="search">
            <div className="lupa">
                <img src="./img/lupa2.png" alt="lupa" />
            </div>
            <div className="textSearch">
                <input type="text" name="iSearch" id="iSearch" placeholder='Buscar' />
            </div>
        </div>
    )
}

export default Search