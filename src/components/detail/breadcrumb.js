const Breadcrumb = () =>{
    const breadcrumb = ['trang chủ', 'phim bộ', 'âu mỹ', 'hành động', 'viễn tưởng', 'phiêu lưu', 'gia tộc rồng']
    return (
        <div>
            <ul className={'d-flex flex-wrap'}>
                {/* {props.movie?.category?.map((item, index) => <p style={{color:'rgb(148 163 184)', textTransform: 'capitalize'}} key={index}>{item} */}
                <svg width="3" height="6" aria-hidden="true" className={"mx-3 overflow-visible text-slate-400"}>
                    <path d="M0 0L3 3L0 6" fill="none" stroke="currentColor" strokeWidth={"1.5"}strokeLinecap="round"></path>
                </svg>
                {/* </p>)} */}
            </ul>
        </div>
    )
}

export default Breadcrumb;