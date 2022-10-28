import '../../assets/css/list.css'
import {ListItem} from './list-item';
import { useState, useEffect, createContext } from "react";
import Pagination from './pagination';
import { useLocation } from 'react-router-dom';

import Header from "../share/header";
import Footer from "../share/footer";
const SearchContext = createContext();

const List = ()=>{
    const { search } = useLocation();
    const pag = search ? Number(search.split("=")[1]) : 1;
   
    let categorySelected = "allCategory";
    let nationSelected = "allNation";
    const [data, setData] = useState({});
    const [stateSelectCategory, setStateSelectCategory] = useState(categorySelected);
    const [stateSelectNation, setStateSelectNation] = useState(nationSelected);

    useEffect(() => {
      GetDataFromApi(setData, pag);
    }, [])

    function GetDataFromApi(setData) {
        fetch(`http://localhost:8080/api/movie/list`, {
            "method": "GET",})
        .then(response => response.json())
        .then(response => {
            setData(response);
        })
        .catch(err => { console.log(err); });
    }

   
    return (
        <div className='container-all p-3'>
            <SearchContext.Provider value={setData}>
                <Header></Header>
            </SearchContext.Provider>
        <div className='container__table'>
        <table className='w-100 my-3 container__content'>
                <thead className='w-100'>
                    <tr>
                        <th scope='col' className="table__column px-3">tên</th>
                        <th scope='col' className="table__column">năm</th>
                        <th scope='col' className="table__column">tình trạng</th>
                        <th scope='col' className="table__column">quốc gia</th>
                        <th scope='col' className="table__column">chất lượng</th>
                    </tr>
                </thead>
                <tbody className='w-100'>       
                    {       
                        data.items?.map((movie, i)=>
                        {
                            return <ListItem key={i} movie={movie} nation={stateSelectNation} category={stateSelectCategory}></ListItem>
                        })
                    }
                </tbody>
            </table>
        </div>
            <Pagination pagination={data?.params !== undefined ? data?.params?.pagination : data?.pagination}></Pagination>
            <Footer></Footer>
        </div>
      
    );
}

export {SearchContext};
export default List;