import { useState } from "react"
import "../../assets/css/auth/login.css"
const Login = () =>{
    const [errorMessagePassword, setErrorMessagePassword] = useState("");
    const [errorMessageEmail, setErrorMessageEmail] = useState("");
    function submitForm(e) {
        e.preventDefault()
        const form = new FormData(e.target);
        let email = form.get("email");
        let password = form.get("email");
        if (email === '') { 
            setErrorMessageEmail("email không được để trống");
        }
        if (password === '') { 
            setErrorMessagePassword("password không được để trống");
        }
    }
    
    function renderErrorMessageEmail(error) {
        return (<div className="errorMessage">{errorMessageEmail}</div>)
    }
    function renderErrorMessagePassword(error) {
        return (<div className="errorMessage">{errorMessagePassword}</div>)
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
                            <label htmlFor="email">Email</label>
                            <input type="email" placeholder="nhập email" name="email" id="email"/>
                            {renderErrorMessageEmail("email")}
                        </div>
                        <div className="form_group">
                            <label htmlFor="password">Mật khẩu</label>
                            <input type="password" placeholder="nhập mật khẩu" name="password" id="password"/>
                            {renderErrorMessagePassword("password")}
                        </div>
                        <div className="form_group d-flex">
                            <input type="radio" id="checkbox" />
                            <label htmlFor="checkbox" className="labelCheckbox">Nhớ mật khẩu</label>
                        </div>
                        <div className="form_group">
                            <button type="submit" id="submit">Đăng nhập</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login