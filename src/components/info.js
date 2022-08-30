import Data from "./data";

function dataRowTable(leftColumn, rightColumn) {
    return (
        <tr style={{borderTop: '1px solid #364254'}}>
            <td className="py-1" style={{textTransform: 'capitalize', color: 'rgb(56 189 248)', whiteSpace:'nowrap' , paddingRight: '0.5rem'}}>{leftColumn}</td>
            {Array.isArray(rightColumn)?<td style={{color: 'rgb(165 180 252)', paddingLeft: '0.5rem'}}>{rightColumn.join(', ')}</td>:<td style={{color: 'rgb(165 180 252)'}}>{rightColumn}</td>}
        </tr>
    )
}

function dataRowTableWithObject(leftColumn, rightColumn){
    return (
        <tr style={{borderTop: '1px solid #364254'}}>
            <td className="py-1" style={{textTransform: 'capitalize', color: 'rgb(56 189 248)', paddingRight: '0.5rem'}}>{leftColumn}</td>
            {<td style={{color: 'rgb(165 180 252)', paddingLeft: '0.5rem'}}>{rightColumn.map(e=>e.name).join(', ')}</td>}
        </tr>
    )
}
const Info = ()=>{

    return(
    <div className={'col-sm-12 col-md-6 col-lg-9 px-3'} style={{padding: 0}}>
        <p className={'my-2'} style={{fontSize: '28px', textAlign: 'center', color: 'rgb(139 92 246)'}}>GIA TỘC RỒNG</p>
        <p style={{fontSize: '20px', textAlign: 'center', color: 'rgb(14 165 233)'}}>House of the Dragon</p>
        <div>
            <table className={'w-100'}>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {dataRowTable('trạng thái', Data.movie.episode_current)}
                    {dataRowTable('số tập', Data.movie.episode_total)}
                    {dataRowTable('thời lượng', Data.movie.time)}
                    {dataRowTable('năm phát hành', Data.movie.year)}
                    {dataRowTable('chất lượng', Data.movie.quality)}
                    {dataRowTable('ngôn ngữ', Data.movie.lang)}
                    {dataRowTable('đạo diễn', Data.movie.director)}
                    {dataRowTable('diễn viên', Data.movie.actor)}
                    {dataRowTableWithObject('thể loại', Data.movie.category)}
                    {dataRowTableWithObject('quốc gia', Data.movie.country)}

                </tbody>
            </table>
        </div>
    </div>
    )
}

export default Info;