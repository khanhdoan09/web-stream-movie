import "../assets/css/poster.css"
const Poster = (props)=>{
    return (<div className={'col-sm-12 col-md-6 col-lg-3 d-block text-center'}>
        <img height={400} className="img" src={props.movie?.thumb_url}/>
    </div>)
}

export default Poster;