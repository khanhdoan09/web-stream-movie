import '../../assets/css/pagination.css';
const Pagination = (props)=>{
    let currentPage = props?.pagination?.currentPage;
    let list = [];
    let startPagination = 1;
    // props.pagination?.totalPages là lấy từ get api
    // props.pagination?.pageRanges là lấy từ get api with key word
    let totalPage = props.pagination?.totalPages? props.pagination?.totalPages: props.pagination?.pageRanges;
    let endPagination = totalPage < 5? totalPage : 5;

    if (currentPage > 3) {
        startPagination = currentPage - 2;
        if (currentPage === props.pagination?.totalPages) {
            endPagination = currentPage;
        }
        else if (currentPage === props.pagination?.totalPages - 1) {
            endPagination = currentPage + 1;   
        }
        else {
            endPagination = currentPage + 2;
        }
    }

    for (let index = startPagination; index <= endPagination; index++) {
        let url = "list?pagination="+(index);
        if (currentPage === index) {
            list.push(<a href={url} className="pag current-page" key={index}>{index}</a>)
        }
        else {           
            list.push(<a href={url} className="pag" key={index}>{index}</a>)
        }
    }
    return (
        <div className = "d-flex justify-content-end w-100">
            <a className="pag" href={`list?pagination=1`}>&lt;&lt;</a>
            <a className="pag" href={`list?pagination=${currentPage>0?currentPage-1:1}`}>&lt;</a>
            {list}
            <a className="pag" href={`list?pagination=${currentPage=props.pagination?.totalPages?currentPage:currentPage+1}`}>&gt;</a>
            <a className="pag" href={`list?pagination=${props?.pagination?.totalPages}`}>&gt;&gt;</a>
        </div>
    )
}

export default Pagination;