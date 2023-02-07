import { useState, useEffect } from "react";
import '../../assets/css/list.css'

const ListItem = (props)=>{
    function GetDataFromApi(setData, api) {
        fetch(`http://localhost:8080/api/movie/detail/brief/${api}`, {
            "method": "GET",})
        .then(response => response.json())
        .then(response => {
            setData(response.message);
        })
        .catch(err => { console.log(err); });
    }

    const [data, setData] = useState({})
      useEffect(() => {
        GetDataFromApi(setData, props.movie.movieId);
    }, [props.movie])

    if (props.nation === 'allNation' && props.category === 'allCategory') {
        return renderToScreen(data, props);   
    }
    else if (data.movie?.country?.[0].name.toString().toLowerCase() === props.nation){
        if (data.movie?.type === props.category || props.category === 'allCategory') {
            return renderToScreen(data, props);
        }
    }
    else if (data.movie?.type === props.category) {
        if (data.movie?.country?.[0].name.toString().toLowerCase() === props.nation || props.nation === 'allNation') {
            return renderToScreen(data, props);
        }
    }
}

function renderToScreen(data, props) {
    return (
        <tr className="contain__tr">
            <td className="py-3">
                <div className="d-flex align-items-center px-3 main">
                    <img width={60} className="rounded" src={props?.movie?.posterUrl}></img>
                    <a className="px-2 link-movie" href={"/home?movie="+props.movie.slug}>
                        <h3 className={'movie_name font-medium'}>{props.movie.name}</h3>
                        <h4 className={'movie_origin-name'}>({props.movie.originName})</h4>
                    </a>
                </div>
            </td>
            <td>{props.movie?.year}</td>
            <td><span className='current-episode p-2 rounded'>{props?.movie?.status}</span></td>
            <td>{props.movie?.country?.name}</td>
            <td>{props?.movie?.quality}</td>
        </tr>
    )
}


export {ListItem};