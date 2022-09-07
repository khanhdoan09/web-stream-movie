import Data from "./data";
import '../../assets/css/episode.css'
function chooseEpisode(episode) {
    let link = Data.episodes[0].server_data.filter(e=>e.name==episode)[0].link_embed;
    if (link != undefined) {
        window.location.href = link;
    }
    else {
        alert('không hỗ trợ');
    }
}
const Episode = (props)=>{
    return  <button onClick={()=>chooseEpisode(props.value)} type="button" className='mx-2 py-1 rounded episode'>Tập {props.value}</button>   
}

export default Episode;