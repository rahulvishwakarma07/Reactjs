import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export default function SignIn() {
    const [email,setemail] = useState("")
    const [password,setpassword] = useState("")

    const navigate = useNavigate()
    const signIn = ()=>{
        const signinURL = 'http://localhost:3000/user/signin'
        axios.post(signinURL,{email,password})
        .then(response=>{
            if(response.status===200){
                console.log(response.data);
                toast.success("SignIn Success...")
                console.log("SignIn Success...");
                sessionStorage.setItem('current-user',email)
                sessionStorage.setItem('isLoggedIn',true)
                sessionStorage.setItem('user_id',""+response.data.user.id)
                navigate("/home")
            }
        })
        .catch(err=>{
            toast.error('SignIn Failed...')
            console.log("SignIn Failed...");
        })
    }


    return <>
        <ToastContainer/>
        <div className="container-fluid d-flex justify-content-center align-items-center" id="signup">
            <div className="form">
                <div className="text-center title">Welcome</div>
                <div className="fs-4 text-center subtitle">Login-Page</div>

                <div className="mt-4 input-container ic2">
                    <input onChange={(event)=>setemail(event.target.value)} placeholder="Email" type="email" className="input" id="lastname" />
                    {/* <div className="cut"></div>
                    <label className="iLabel" for="lastname">Email</label> */}
                </div>
                <div className="mt-4 input-container ic2">
                    <input onChange={(event)=>setpassword(event.target.value)} placeholder="Password" type="password" className="input" id="email" />
                    {/* <div className="cut cut-short"></div>
                    <label className="iLabel" for="email">Password</label> */}
                </div>
                <button onClick={signIn} className="mb-4 submit" type="text">SignIn</button>
                <span className="ms-5 text-center text-white" id="account">Create an account ? </span><Link className="" to="/signup">Signup</Link>
            </div>
        </div>
    </>
}
