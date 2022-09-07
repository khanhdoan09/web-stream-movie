import "../../assets/css/info.css"

function dataRowTable(leftColumn, rightColumn) {
    return (
        <tr style={{borderTop: '1px solid #364254'}}>
            <td className="py-1 left-column">{leftColumn}</td>
            {Array.isArray(rightColumn)?<td className="right-column">{rightColumn.join(', ')}</td>:<td className="right-column">{rightColumn}</td>}
        </tr>
    )
}

function dataRowTableWithObject(leftColumn, rightColumn){
    return (
        <tr style={{borderTop: '1px solid #364254'}}>
            <td className="py-1 left-column">{leftColumn}</td>
            {<td className="right-column">{rightColumn?.map(e=>e.name).join(', ')}</td>}
        </tr>
    )
}
const Info = (props)=>{

    return(
    <div className={'px-3 container__info'}>
        <p className='my-2 name'>{props.movie?.name}</p>
        <p className="origin-name">{props.movie?.origin_name}</p>
        <div>
            <table className={'w-100'}>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {dataRowTable('trạng thái', props.movie?.episode_current)}
                    {dataRowTable('số tập', props.movie?.episode_total)}
                    {dataRowTable('thời lượng', props.movie?.time)}
                    {dataRowTable('năm phát hành', props.movie?.year)}
                    {dataRowTable('chất lượng', props.movie?.quality)}
                    {dataRowTable('ngôn ngữ', props.movie?.lang)}
                    {dataRowTable('đạo diễn', props.movie?.director)}
                    {dataRowTable('diễn viên', props.movie?.actor)}
                    {dataRowTableWithObject('thể loại', props.movie?.category)}
                    {dataRowTableWithObject('quốc gia', props.movie?.country)}
                </tbody>
            </table>
        </div>
    </div>
    )
}

export default Info;