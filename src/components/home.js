import Breadcrumb from "./breadcrumb";
import Info from "./info";
import Poster from "./poster";
import Content from "./content";
import TitleCollapse from "./title-collapse";
import Episode from "./episode";
import '../assets/css/home.css'

const Home = ()=>{
    return (
        <div className="p-4 container-all">
            <div className={'container mx-auto'}>
                <Breadcrumb />
            <div className={'d-flex flex-column'}>
                    <div className={'row w-100 p-1 py-2 container__content'}>
                        <Poster></Poster>
                        <Info></Info>
                    </div>
                    <div className={'w-100 my-4 p-3 container__content'}>
                        <TitleCollapse value="Nội dụng phim"></TitleCollapse>
                        <Content></Content>
                        <TitleCollapse value="Xem phim"></TitleCollapse>  
                        <div className='d-flex'>
                            <Episode value="1"></Episode>                   
                            <Episode value="2"></Episode>    
                        </div>  
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Home;