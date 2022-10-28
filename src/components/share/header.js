import { useState, useEffect, useContext } from "react";
import Search from "../list/search";
import { Filter } from "../list/filter";
import '../../assets/css/share/header.css'


const Header = (props) => {
    const [toggleClickAvatar, setToggleClickAvatar] = useState(false);
    const [navCollapse, setNavCollapse] = useState(false);
    
    function logout() {
        fetch(`http://localhost:8080/api/auth/logout`, {
            "method": "GET",})
        .then(response => response.json())
        .then(response => {
            localStorage.removeItem("jwt");
            window.location.href = "/login"
        })
        .catch(err => { console.log(err); });
    }
    
    function isLogin() {
        let isDisplay = toggleClickAvatar ? "visible" : "invisible";
        if (localStorage.getItem("jwt")) {
            return (
                <div className="d-grid justify-content-end">
                    <img onClick={()=>setToggleClickAvatar(!toggleClickAvatar)} src="https://hbomax-images.warnermediacdn.com/2022-06/houseofthedragon_characterart_daemon_avatar_200x200.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com" className="avatar"/>   
                    <div className={isDisplay + " p-2 m-1"} style={{backgroundColor: "white", borderRadius: "10px"}}>
                        <span onClick={logout} className="text-dark" style={{cursor: "pointer"}}>đăng xuất</span>                      
                    </div>
                </div>
         
                );
        }
        else {
            return (
                <a href="/login" className="signIn center w-100">
                    Đăng nhập
                </a>
            );
        }
    }
    
    function displayNav(){
        let nav = navCollapse ? "display_nav" : "hidden_nav";
        return (
            <div className={nav + " w-100 p-4 position-absolute rounded"} style={{backgroundColor: "#1e203b"}}> 
                <div className="d-flex flex-wrap justify-content-center flex-column">
                    {isLogin()}
                </div>
                <Search ></Search>
                <Filter ></Filter>
            </div>
        );
    }

    return (
        <div>
          <div className="d-flex flex-wrap justify-content-between">
                    <a href="/home">
                        <img src="https://motphimtv.info/motphimtv.png" className="px-5"/>
                    </a>
                    <div className="d-none d-lg-flex flex-wrap justify-content-center flex-column px-5 mx-5">
                        {isLogin()}
                    </div>
            </div>
            <div className="d-none d-lg-flex container__content p-3 flex-wrap" style={{backgroundColor: "transparent", height: "fit-content"}}>
                <Search></Search>
                <Filter></Filter>
            </div>
            <div className="d-sm-none d-block m-2">
                <div>
                    <h3 onClick={()=>{setNavCollapse(!navCollapse)}}>
                        <i className="fa-solid fa-bars"></i>
                    </h3>
                    {displayNav()}
                </div>
            </div>
        </div>
    )
}

export default Header;