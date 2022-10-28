const Breadcrumb = (props) =>{
    let movie = props.movie;
    function getInfoBreadcrumb(data, index) {
        return (
            <p key={index}> {data} 
            <svg width="3" height="6" aria-hidden="true" className={"mx-3 overflow-visible text-slate-400"}>
               <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" strokeWidth={"1.5"}strokeLinecap="round"></path>
           </svg> 
            </p>
        )
    }
    return (
        <div>
            <ul className={'d-flex flex-wrap'}>
                {getInfoBreadcrumb(movie?.country?.name)}
                {movie?.categories?.map((item, index)=>getInfoBreadcrumb(item?.name, index))}
                <p>{movie?.name}</p>
            </ul>
        </div>
    )
}

export default Breadcrumb;