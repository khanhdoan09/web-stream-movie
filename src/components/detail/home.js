import Breadcrumb from "./breadcrumb";
import Info from "./info";
import Poster from "./poster";
import Content from "./content";
import TitleCollapse from "./title-collapse";
import Episode from "./episode";
import '../../assets/css/home.css'
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

const Home = ()=>{
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const slug = params.get('movie');
    const [data, setData] = useState({})
    // componentDidMount
    useEffect(() => {
      GetDataFromApi(data, setData, slug);
    }, [])
        return (
        <div className="p-4 container-all">
            <div className={'container mx-auto'}>
                <Breadcrumb movie={data.movie} />
            <div className={'d-flex flex-column'}>
                    <div className={'d-flex flex-wrap w-100 p-1 py-2 container__content'}>
                        <Poster movie={data.movie}></Poster>
                        <Info movie={data.movie}></Info>
                    </div>
                    <div className={'w-100 my-4 p-3 container__content'}>
                        <TitleCollapse value="Nội dụng phim"></TitleCollapse>
                        <Content movie={data.movie}></Content>
                        <TitleCollapse value="Xem phim"></TitleCollapse>  
                        <div className='d-flex flex-wrap'>
                            {data.episodes?.[0].server_data.map((episode, index)=><Episode key={index} value={episode.slug}></Episode>)}                      
                        </div>  
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Home;