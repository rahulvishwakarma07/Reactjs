import { Link, useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import { ToastContainer,toast } from "react-toastify";

export default function SignUp() {
  
  const [name,setname] = useState("")
  const [email,setemail] = useState("")
  const [password,setpassword] = useState("")

  const signupURL = 'http://localhost:3000/user/save'
  const navigate = useNavigate()
  const signUp=()=>{
      axios.post(signupURL,{name,email,password})
      .then(response=>{
        console.log(response.data);
        toast.success("SignUp Success...")
        navigate('/signin')
      })
      .catch(err=>{
        console.log(err);
        toast.error("SignUp Failed...")
      })
  }
  
  return <>
    <ToastContainer/>
    <div className="container-fluid d-flex justify-content-center align-items-center" id="signup">
      <div className="form">
        <div className="text-center title">Welcome</div>
        <div className="text-center subtitle">Let's create your account!</div>

        <div className="input-container ic1">
          <input onChange={(event)=>setname(event.target.value)} placeholder="Full Name" type="text" className="input" id="firstname" />
          {/* <div className="cut"></div>
          <label className="iLabel" for="firstname">Full Name</label> */}
        </div>

        <div className="input-container ic2">
          <input onChange={(event)=>setemail(event.target.value)} placeholder="Email" type="email" className="input" id="lastname" />
          {/* <div className="cut"></div>
          <label className="iLabel" for="lastname">Email</label> */}
        </div>
        <div className="input-container ic2">
          <input onChange={(event)=>setpassword(event.target.value)} placeholder="Password" type="password" className="input" id="email" />
          {/* <div className="cut cut-short"></div>
          <label className="iLabel" for="email">Password</label> */}
        </div>
        <button onClick={signUp} className="mb-3 submit" type="text">SignUp</button>
        <span className="ms-3 text-center text-white" id="account">Already have an account ? </span><Link className="" to="/">Signin</Link>
      </div>
    </div>
  </>
}