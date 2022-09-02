import '../../assets/css/list.css'
import {ListItem} from './list-item';
import { Filter } from './filter';
import { useState, useEffect } from "react";

function GetDataFromApi(data, setData, api) {
    fetch(`https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=1`, {
        "method": "GET",})
    .then(response => response.json())
    .then(response => {
        setData(response);
    })
    .catch(err => { console.log(err); });
}


let nationSelected='all';
const List = ()=>{
    const [stateSelectTime, setStateSelectTime] = useState('all');
    const [stateSelectCategory, setStateSelectCategory] = useState('allCategory');
    const [stateSelectNation, setStateSelectNation] = useState('allNation');

    function selectStateTime(event) {
        setStateSelectTime(event.target.value);
    }

    function selectCategory(event) {
        setStateSelectCategory(event.target.value);
    }

    function selectNation(event) {
        setStateSelectNation(event?.target?.value);
    }

    function submitForm(e) {
        e.preventDefault();
    }

    const [data, setData] = useState({});
    // componentDidMount
    useEffect(() => {
      GetDataFromApi(data, setData, '');
    }, [])

    return (
        <div className='container-all p-3'>
              <div className="container__content p-3">
            <form className="d-flex flex-wrap align-items-center" onSubmit={submitForm}>
                <span className="px-3">Lọc Phim</span>
                <div className="d-flex flex-wrap">
                    <div className="px-2">
                        <select onChange={selectStateTime}>
                            <option value="newest">Phim mới nhất</option>
                            <option value="update">Thời gian cập nhật</option>
                            <option value="year">Năm sản xuất</option>
                        </select>
                    </div>
                    <div className="px-2">
                        <select onChange={selectCategory}>
                            <option value="allCategory">Toàn bộ thể loại</option>
                            <option value="series">Phim bộ</option>
                            <option value="single">Phim lẻ</option>
                            <option value="tvshows">TV show</option>
                        </select>
                    </div>
                    <div className="px-2">
                        <select onChange={selectNation}>
                            <option value="allNation">Toàn bộ quốc gia</option>
                            <option value="anh">Âu mỹ</option>
                            <option value="trung quốc">Trung quốc</option>
                            <option value="nhật bản">Nhật bản</option>
                            <option value="hàn quốc">Hàn quốc</option>
                            <option value="thái lan">Thái Lan</option>
                            <option value="pháp">Pháp</option>
                        </select>
                    </div>
                    <div>
                        <button className="submit-form mx-2" type="submit">Lọc Phim</button>
                    </div>
                </div>
            </form>
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
        </div>
    );
}

export default List;