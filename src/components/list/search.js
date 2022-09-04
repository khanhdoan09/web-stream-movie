import { useState } from "react";

function submitForm(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(data.get("search"));
    let keyword = data.get("search");
    SearchDataFromApi(keyword, null, 0)
}

function SearchDataFromApi(data, setData, pag) {
    fetch(`https://ophim.cc/_next/data/jMo1r8lC0F6IGwkz0ayh-/tim-kiem.json?keyword=`+data, {
        "method": "GET",})
    .then(response => response.json())
    .then(response => {
        console.log(response);
    })
    .catch(err => { console.log(err); });
}


const Search = ()=>{
    const [search, setSearch] = useState("");

    return (
        <form onSubmit={submitForm}>
            <input placeholder="tìm kiếm" type="text" name="search"/>
        </form>
    )
}

export default Search;