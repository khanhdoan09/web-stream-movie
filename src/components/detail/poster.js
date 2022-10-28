import "../../assets/css/poster.css"
const Poster = (props)=>{
    return (
    <div className={'d-block text-center container__img'}>
        <img className="img" src={props.poster}/>
    </div>)
}

export default Poster;