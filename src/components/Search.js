function Search({ setValue, value }) {
    return (
        <div className="search">
            {/* <label htmlFor="searchInput">Поиск:</label> */}
            <input id="searchInput" onChange={(e) => setValue(e.target.value.trim())} value={value} type="text" className="search__input" placeholder="Поиск..." />
        </div>
    )
};

export default Search;