import '../../assets/css/list.css'
import ListItem from './list-item';
import Filter from './filter';
import ListData from '../data-list';
const List = ()=>{
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
                        ListData.items.map((movie, i)=><ListItem key={i} movie={movie}></ListItem>)
                    }
                </tbody>
            </table>
        </div>
    );
}

export default List;