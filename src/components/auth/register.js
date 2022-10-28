import { useState } from "react"
import "../../assets/css/auth/login.css"
const Register = () =>{
    const [errorMessageName, setErrorMessageName] = useState("");
    const [errorMessageEmail, setErrorMessageEmail] = useState("");
    const [errorMessagePassword, setErrorMessagePassword] = useState("");
    const [errorMessageRePassword, setErrorMessageRePassword] = useState("");

    function submitForm(e) {
        e.preventDefault()
        resetState();
        let check = true;
        const form = new FormData(e.target);
        let email = form.get("email");
        let password = form.get("password");
        let rePassword = form.get("rePassword");
        let fullName = form.get("fullName");

        if (fullName === ''){
            setErrorMessageName("tên không được để trống");
            check = false;
        }
        if (email === '') { 
            setErrorMessageEmail("email không được để trống");
            check = false;
        }
        if (password === '') { 
            setErrorMessagePassword("password không được để trống");
            check = false;
        }
        if (password !== rePassword ) {
            setErrorMessageRePassword("Xác nhận mật khẩu không đúng");
            check = false;
        }
        if (check) {
            submitToApi(email, password, fullName);
        }
    }

    function resetState() {
        setErrorMessageName("");
        setErrorMessageEmail("");
        setErrorMessagePassword("");
        setErrorMessageRePassword("");
    }
    
    function renderErrorMessageName() {
        return (<div className="errorMessage">{errorMessageName}</div>)
    }

    function renderErrorMessageEmail() {
        return (<div className="errorMessage">{errorMessageEmail}</div>)
    }

    function renderErrorMessagePassword() {
        return (<div className="errorMessage">{errorMessagePassword}</div>)
    }

    function renderErrorMessageRePassword() {
        return (<div className="errorMessage">{errorMessageRePassword}</div>)
    }

    function submitToApi(email, password, fullName) {
                // fetch(`http://localhost:8080/api/auth/register?username=${email}&password=${password}&isAdmin=1&fullName=${fullName}`, {method: "POST",}).
        fetch(`https://stream-movie-1.herokuapp.com/api/auth/register?username=${email}&password=${password}&isAdmin=1&fullName=${fullName}`, {method: "POST",}).
        then(response => response.json()).
        then(response => {
            console.log(response);
            if (response.response === 'ok') {
                window.location.href = "/login"
            }
            else if (response.response === "error: username is exist") {
                setErrorMessageEmail("email đã tồn tại")
            }
        })
    }
    return (
        <div className="container_fluid">
            <div className="d-flex flex-column justify-content-center align-items-center h-100">
                <div className="contain__area">
                    <div className="contain__header">
                        <span className="welcome">welcome to</span>
                        <h2 className="title">web stream movie</h2>
                    </div>
                    <form className="contain__form" onSubmit={submitForm}>
                        <div className="form_group">
                            <label htmlFor="fullName">Tên</label>
                            <input type="text" placeholder="nhập email" name="fullName" id="fullName"/>
                            {renderErrorMessageName()}
                        </div>
                        <div className="form_group">
                            <label htmlFor="email">Email</label>
                            <input type="email" placeholder="nhập email" name="email" id="email"/>
                            {renderErrorMessageEmail()}
                        </div>
                        <div className="form_group">
                            <label htmlFor="password">Mật khẩu</label>
                            <input type="password" placeholder="nhập mật khẩu" name="password" id="password"/>
                            {renderErrorMessagePassword()}
                        </div>
                        <div className="form_group">
                            <label htmlFor="rePassword">Xác nhận mật khẩu</label>
                            <input type="password" placeholder="xác nhận mật khẩu" name="rePassword" id="rePassword"/>
                            {renderErrorMessageRePassword()}
                        </div>
                        <div className="form_group">
                            <button type="submit" id="submit">Đăng kí</button>
                        </div>
                        <div className="form_group d-flex justify-content-center">
                            <span style={{color: "#dbe2fb"}}>Đã có tài khoản ?</span>
                            <a className="sign-up mx-2" href="login">Đăng nhập ngay</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register