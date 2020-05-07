import React,{useEffect,useRef} from 'react';
import './style.scss';
import { AiOutlineUser,AiFillLock } from "react-icons/ai";
import {loginUser}from './../../../api/users';
import {toast} from 'react-toastify';
import Router from 'next/router';
function Login(props) {
    const userRef = useRef("");
    const passRef = useRef("");
    const LoginUserAction = async(e)=>{
        e.preventDefault();
        console.log(userRef.current.value)
        let data = await loginUser(userRef.current.value,passRef.current.value);
        if(data.status==200 && data.data?.status=="success"){
            toast.success("Đăng Nhập Thành Công");
            document.cookie= "token=" + data.data.data.token 
            Router.push("/admin");
        }else{
            toast.error("Đăng Nhập Không Thành Công")
        }
    }
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
                <form  onSubmit={LoginUserAction}>
                    <h2 className="title">Login</h2>
                    <div className="input-div one">
                        <div className="i">
                            <AiOutlineUser className="fas fa-user"></AiOutlineUser>
                        </div>
                        <div className="div">
                            <h5>Username</h5>
                            <input type="text" className="input" ref={userRef}/>
                        </div>
                    </div>
                    <div className="input-div pass">
                        <div className="i">
                            <AiFillLock className="fas fa-lock"></AiFillLock>
                        </div>
                        <div className="div">
                            <h5>Password</h5>
                            <input type="password" className="input" ref={passRef} />
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