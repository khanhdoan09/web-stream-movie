import Data from "./data";
function chooseEposide(episode) {
    let link = Data.episodes[0].server_data.filter(e=>e.name==episode)[0].link_embed;
    if (link != undefined) {
        window.location.href = link;
    }
    else {
        alert('không hỗ trợ');
    }
}
const Episode = (props)=>{
    return  <button onClick={()=>chooseEposide(props.value)} type="button" className='mx-2 rounded' style={{width: '60px', backgroundColor: 'rgb(71 85 105)', color: 'rgb(249 250 251)', border: 'none'}}>Tập {props.value}</button>   
}

export default Episode;