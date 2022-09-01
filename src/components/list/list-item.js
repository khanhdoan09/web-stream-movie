import { useState, useEffect } from "react";

function GetDataFromApi(data, setData, api) {
    fetch(`https://ophim1.com/phim/${api}`, {
        "method": "GET",})
    .then(response => response.json())
    .then(response => {
        setData(response);
    })
    .catch(err => { console.log(err); });
}

const ListItem = (props)=>{
    const [data, setData] = useState({})
      // componentDidMount
      useEffect(() => {
        GetDataFromApi(data, setData, props.movie.slug);
    }, [])
    return (
        <tr style={{borderTop: '1px solid rgb(75 85 99)'}}>
            <td className="py-3">
                <div className="d-flex align-items-center px-3">
                    <img width={60} className="rounded" src={data.movie?.thumb_url}></img>
                    <a className="px-2 link-movie" href={"/home?movie="+props.movie.slug}>
                        <h3 className={'movie_name font-medium'}>{props.movie.name}</h3>
                        <h4 className={'movie_origin-name'}>({props.movie.origin_name})</h4>
                    </a>
                </div>
            </td>
            <td>{props.movie.year}</td>
            <td><span className='current-episode p-2 rounded'>{data.movie?.episode_current}</span></td>
            <td>{data.movie?.country?.[0].name}</td>
            <td>{data.movie?.quality}</td>
            <td>{props.movie?.modified.time}</td>
        </tr>
    )
}


export default ListItem;