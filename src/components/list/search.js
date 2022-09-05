import '../../assets/css/search.css'


const Search = (props)=>{
    
    function SearchDataFromApi(keyword, setData) {
        fetch(`https://ophim.cc/_next/data/jMo1r8lC0F6IGwkz0ayh-/tim-kiem.json?keyword=`+keyword, {
            method: "GET",})
        .then(response => response.json())
        .then(response => {
            props.setData(response.pageProps.data);
        })
        .catch(err => { console.log(err); });
    }

    function submitSearchForm(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        let keyword = data.get("search");
        SearchDataFromApi(keyword)
    }

    
    return (
        <form onSubmit={submitSearchForm} className="contain__search">
            <svg width="20" height="20" fill="currentColor" className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z">
                </path>
            </svg>
          <input placeholder="tìm kiếm" type="text" name="search" className="input-search"/>
        </form>
    )
}

export default Search;