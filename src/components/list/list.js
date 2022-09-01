import '../../assets/css/list.css'
import ListItem from './list-item';
import Filter from './filter';
import ListData from '../data-list';
import Pagination from './pagination';
import { useState, useEffect } from "react";

function GetDataFromApi(data, setData, api) {
    fetch(`https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=1`, {
        "method": "GET",})
    .then(response => response.json())
    .then(response => {
        console.log(response);
        setData(response);
    })
    .catch(err => { console.log(err); });
}

const List = ()=>{
    const [data, setData] = useState({})
    // componentDidMount
    useEffect(() => {
      GetDataFromApi(data, setData, '');
    }, [])

    return (
        <div className='container-all p-3'>
            <Filter></Filter>
            <table className='w-100 my-3 container__content'>
                <thead className='w-100'>
                    <tr>
                        <th scope='col' className="table__colume px-3">tên</th>
                        <th scope='col' className="table__colume">năm</th>
                        <th scope='col' className="table__colume">tình trạng</th>
                        <th scope='col' className="table__colume">quốc gia</th>
                        <th scope='col' className="table__colume">chất lượng</th>
                        <th scope='col' className="table__colume">ngày cập nhật</th>
                    </tr>
                </thead>
                <tbody>       
                    {       
                        data.items?.map((movie, i)=><ListItem key={i} movie={movie}></ListItem>)
                    }
                </tbody>
            </table>
        </div>
    );
}

export default List;