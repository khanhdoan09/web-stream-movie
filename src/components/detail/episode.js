import Data from "./data";
import '../../assets/css/episode.css'

const Episode = (props)=>{
    function chooseEpisode() {
        let link = props?.episode?.link;
        if (link != undefined) {
            window.location.href = link;
        }
        else {
            alert('không hỗ trợ');
        }
    }
    return  <button onClick={()=>chooseEpisode()} type="button" className='m-2 py-1 rounded episode'>Tập {props.episode?.episodeCurrent}</button>   
}

export default Episode;