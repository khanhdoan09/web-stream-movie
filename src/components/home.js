import Breadcrumb from "./breadcrumb";
import Info from "./info";
import Poster from "./poster";
import Content from "./content";
import TitleCollapse from "./title-collapse";
import Episode from "./episode";

const Home = ()=>{
    return (
        <div className="p-4" style={{backgroundColor:'rgb(15,23,42)'}}>
            <div className={'container mx-auto'}>
                <Breadcrumb />
            <div className={'d-flex flex-column'}>
                    <div className={'row w-100 p-1 py-2'} style={{backgroundColor:'rgb(30,41,59)', borderRadius: '10px', margin:0, padding:0}}>
                        <Poster></Poster>
                        <Info></Info>
                    </div>
                    <div className={'w-100 my-4 p-3'} style={{backgroundColor:'rgb(30,41,59)', borderRadius: '20px'}}>
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