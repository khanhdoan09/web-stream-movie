import '../../assets/css/filter.css'
import { useState } from "react";


const Filter = () =>{
    const [stateSelectTime, setStateSelectTime] = useState('all');
    const [stateSelectCategory, setStateSelectCategory] = useState('all');
    const [stateSelectNation, setStateSelectNation] = useState('all');

    function selectStateTime(event) {
        setStateSelectTime(event.target.value);
    }

    function selectCategory(event) {
        setStateSelectCategory(event.target.value);
    }

    function selectNation(event) {
        setStateSelectNation(event?.target?.value);
                return [stateSelectNation, setStateSelectNation];
    }

    function submitForm(e) {
        e.preventDefault();
    }

    return (
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
                            <option value="cinema">Phim bộ</option>
                            <option valye="series">Phim lẻ</option>
                        </select>
                    </div>
                    <div className="px-2">
                        <select onChange={selectNation}>
                            <option value="allNation">Toàn bộ quốc gia</option>
                            <option value="america">Âu mỹ</option>
                            <option value="china">Trung quốc</option>
                            <option value="japan">Nhật bản</option>
                            <option value="korea">Hàn quốc</option>
                            <option value="thailand">Thái Lan</option>
                        </select>
                    </div>
                    <div>
                        <button className="submit-form mx-2" type="submit">Lọc Phim</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export {Filter};