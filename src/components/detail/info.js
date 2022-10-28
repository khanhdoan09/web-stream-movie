import "../../assets/css/info.css"

function dataRowTable(leftColumn, rightColumn) {
    return (
        <tr style={{borderTop: '1px solid #364254'}}>
            <td className="py-1 left-column">{leftColumn}</td>
            {Array.isArray(rightColumn)?<td className="right-column">{rightColumn.map(m => m.name).join(', ')}</td>:<td className="right-column">{rightColumn?.name ? rightColumn?.name : rightColumn}</td>}
        </tr>
    )
}

function dataRowTableWithObject(leftColumn, rightColumn){
    return (
        <tr style={{borderTop: '1px solid #364254'}}>
            <td className="py-1 left-column">{leftColumn}</td>
            {/* {<td className="right-column">{rightColumn?.map(m=>m.name).join(', ')}</td>} */}
        </tr>
    )
}
const Info = (props)=>{

    return(
    <div className={'px-3 container__info'}>
        <p className='my-2 name'>{props.movie?.movie?.name}</p>
        <p className="origin-name">{props.movie?.movie?.originName}</p>
        <div>
            <table className={'w-100'}>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {dataRowTable('trạng thái', props.movie?.episodeCurrent)}
                    {dataRowTable('số tập', props.movie?.episodeTotal)}
                    {dataRowTable('thời lượng', props.movie?.time)}
                    {dataRowTable('năm phát hành', props.movie?.movie?.year)}
                    {dataRowTable('chất lượng', props.movie?.quality)}
                    {dataRowTable('ngôn ngữ', props.movie?.lang)}
                    {dataRowTable('đạo diễn', props.movie?.directors)}
                    {dataRowTable('diễn viên', props.movie?.actors)}
                    {dataRowTable('thể loại', props.movie?.movie?.categories)}
                    {dataRowTable('quốc gia', props.movie?.movie?.country)}
                </tbody>
            </table>
        </div>
    </div>
    )
}

export default Info;