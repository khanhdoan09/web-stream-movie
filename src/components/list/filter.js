import '../../assets/css/filter.css'
const Filter = () =>{
    return (
        <div className="container__content p-3">
            <form className="d-flex flex-wrap align-items-center">
                <span className="px-3">Lọc Phim</span>
                <div className="d-flex flex-wrap">
                    <div className="px-2">
                        <select>
                            <option>Phim mới nhất</option>
                            <option>Thời gian cập nhật</option>
                            <option>Năm sản xuất</option>
                        </select>
                    </div>
                    <div className="px-2">
                        <select>
                            <option>Toàn bộ thể loại</option>
                            <option>Phim bộ</option>
                            <option>Phim lẻ</option>
                        </select>
                    </div>
                    <div className="px-2">
                        <select>
                            <option>Toàn bộ quốc gia</option>
                            <option>Âu mỹ</option>
                            <option>Trung quốc</option>
                            <option>Nhật bản</option>
                            <option>Hàn quốc</option>
                        </select>
                    </div>
                    <div>
                        <button className="submit-form mx-2" type="button">Lọc Phim</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Filter;