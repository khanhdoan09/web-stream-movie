import '../../assets/css/list.css'
import ListItem from './list-item';
import Filter from './filter';
const List = ()=>{
    return (
        <div className='container-all p-3'>
            <Filter></Filter>
            <table className='w-100 my-3 container__content'>
                <thead className='w-100'>
                    <tr>
                        <th className="py-3 px-3">tên</th>
                        <th>năm</th>
                        <th>tình trạng</th>
                        <th>quốc gia</th>
                        <th>chất lượng</th>
                        <th>ngày cập nhật</th>
                    </tr>
                </thead>
                <tbody>            
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                    <ListItem></ListItem>
                </tbody>
            </table>
        </div>
    );
}

export default List;