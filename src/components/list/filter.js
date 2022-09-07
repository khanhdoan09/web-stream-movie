import '../../assets/css/filter.css'



const Filter = (props) =>{
    let timeSelected = "allTime";
    let categorySelected = "allCategory";
    let nationSelected = "allNation";

    function selectStateTime(event) {
        timeSelected = event.target.value;
    }

    function selectCategory(event) {
        categorySelected = event.target.value;
    }

    function selectNation(event) {
        nationSelected = event?.target?.value;
    }



    function submitFilterForm(e) {
        e.preventDefault();
        let sortMovie= [] 
        for (let movie of props.data.items) {
            sortMovie.push(movie);
        }
        sortMovie.sort(function(a, b) {
            return a.year - b.year;
        })
        let newData = JSON.parse(JSON.stringify(props.data));
        newData.items = sortMovie;
        props.setData(newData);
    }


    return (
        <form className="d-flex flex-wrap align-items-center" onSubmit={submitFilterForm}>
        <span className="px-3 py-2">Lọc Phim</span>
        <div className="d-flex flex-wrap">
            <div className="px-2 py-2">
                <select onChange={selectStateTime}>
                    <option value="newest">Phim mới nhất</option>
                    <option value="update">Thời gian cập nhật</option>
                    <option value="year">Năm sản xuất</option>
                </select>
            </div>
            <div className="px-2 py-2">
                <select onChange={selectCategory}>
                    <option value="allCategory">Toàn bộ thể loại</option>
                    <option value="series">Phim bộ</option>
                    <option value="single">Phim lẻ</option>
                    <option value="tvshows">TV show</option>
                </select>
            </div>
            <div className="px-2 py-2">
                <select onChange={selectNation}>
                    <option value="allNation">Toàn bộ quốc gia</option>
                    <option value="việt nam">Việt Nam</option>
                    <option value="âu mỹ">Âu mỹ</option>
                    <option value="anh">Anh</option>
                    <option value="trung quốc">Trung quốc</option>
                    <option value="nhật bản">Nhật bản</option>
                    <option value="hàn quốc">Hàn quốc</option>
                    <option value="thái lan">Thái Lan</option>
                    <option value="pháp">Pháp</option>
                    <option value="thổ nhĩ kỳ">Thổ Nhĩ Kỳ</option>
                </select>
            </div>
        </div>
        <div className="d-block py-2">
                <button className="submit-form mx-2 d-block" type="submit">Lọc Phim</button>
            </div>
    </form>
    )
}

export {Filter};