import Data from '../data'

const ListItem = ()=>{
    return (
        <tr style={{borderTop: '1px solid rgb(75 85 99)'}}>
            <td className="py-3">
                <div className="d-flex align-items-center px-3">
                    <img width={60} className="rounded" src={Data.movie.thumb_url}></img>
                    <a className="px-2 link-movie" href="/home">
                        <h3 className={'movie_name font-medium'}>{Data.movie.name}</h3>
                        <h4 className={'movie_origin-name'}>({Data.movie.origin_name})</h4>
                    </a>
                </div>
            </td>
            <td>{Data.movie.year}</td>
            <td><span className='current-episode p-2 rounded'>{Data.movie.episode_current}</span></td>
            <td>{Data.movie.country[0].name}</td>
            <td>{Data.movie.quality}</td>
            <td>{Data.movie.modified.time}</td>
        </tr>
    )
}

export default ListItem;