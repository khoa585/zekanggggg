import React,{useEffect} from 'react';
import './style.scss';
import { AiOutlineUser,AiFillLock } from "react-icons/ai";
function Login(props) {
    useEffect(() => {
        const getlogin = () => {
            const inputs = document.querySelectorAll(".input");
            function addcl(){
                let parent = this.parentNode.parentNode;
                parent.classList.add("focus");
            }
            function remcl(){
                let parent = this.parentNode.parentNode;
                if(this.value == ""){
                    parent.classList.remove("focus");
                }
            }
            inputs.forEach(input => {
                input.addEventListener("focus", addcl);
                input.addEventListener("blur", remcl);
            });
        }
        getlogin()
    }, [])
    return (
        <div className="contain-login">
            <div className="login-content">
                <form >
                    <h2 className="title">Login</h2>
                    <div className="input-div one">
                        <div className="i">
                            <AiOutlineUser className="fas fa-user"></AiOutlineUser>
                        </div>
                        <div className="div">
                            <h5>Username</h5>
                            <input type="text" className="input" />
                        </div>
                    </div>
                    <div className="input-div pass">
                        <div className="i">
                            <AiFillLock className="fas fa-lock"></AiFillLock>
                        </div>
                        <div className="div">
                            <h5>Password</h5>
                            <input type="password" className="input" />
                        </div>
                    </div>
                    <a href="#">Forgot Password?</a>
                    <input type="submit" className="btnLogin" value="Login" />
                </form>
            </div>
        </div>
    );
}

export default Login;