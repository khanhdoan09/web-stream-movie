import '../../assets/css/list.css'
import {ListItem} from './list-item';
import { useState, useEffect } from "react";
import Pagination from './pagination';
import { useLocation } from 'react-router-dom';
import Search from './search';
import { Filter } from './filter';

function GetDataFromApi(data, setData, pag) {
    fetch(`https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=`+pag, {
        "method": "GET",})
    .then(response => response.json())
    .then(response => {
        setData(response);
    })
    .catch(err => { console.log(err); });
}



const List = ()=>{
    const { search } = useLocation();
    const pag = search ? Number(search.split("=")[1]) : 1;
   
    let timeSelected = "allTime";
    let categorySelected = "allCategory";
    let nationSelected = "allNation";
    const [data, setData] = useState({});
    const [stateSelectTime, setStateSelectTime] = useState(timeSelected);
    const [stateSelectCategory, setStateSelectCategory] = useState(categorySelected);
    const [stateSelectNation, setStateSelectNation] = useState(nationSelected);

    useEffect(() => {
      GetDataFromApi(data, setData, pag);
    }, [])

    return (
        <div className='container-all p-3'>
            <div className="container__content p-3 d-flex">
            <Search setData={setData}></Search>
            <Filter setStateSelectCategory={setStateSelectCategory} setStateSelectNation={setStateSelectNation} data={data} setData={setData}></Filter>
        </div>
            <table className='w-100 my-3 container__content'>
                <thead className='w-100'>
                    <tr>
                        <th scope='col' className="table__column px-3">tên</th>
                        <th scope='col' className="table__column">năm</th>
                        <th scope='col' className="table__column">tình trạng</th>
                        <th scope='col' className="table__column">quốc gia</th>
                        <th scope='col' className="table__column">chất lượng</th>
                        <th scope='col' className="table__column">ngày cập nhật</th>
                    </tr>
                </thead>
                <tbody>       
                    {       
                        data.items?.map((movie, i)=><ListItem key={i} movie={movie} nation={stateSelectNation} category={stateSelectCategory}></ListItem>)
                    }
                </tbody>
            </table>
            <Pagination pagination={data?.params != undefined ? data?.params?.pagination : data?.pagination}></Pagination>
        </div>
    );
}

export default List;