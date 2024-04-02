import { useRef } from "react"


function Register(props) {

    const {addrecord} = props
    
    let idInput = useRef(null)
    let nameInput = useRef(null)
    let emailInput = useRef(null)
    let contactInput = useRef(null)
    let passwordInput = useRef(null)

    return <>
        <div className="col-md-5 border p-0 bg-light rounded">
            <div className="container-fluid bg-danger rounded-top" height="40px">
                <h1 className="text-center text-white p-2">Register Here</h1>
            </div>
            <div className="container form control">
                <input ref={idInput} className="form-control mt-4" placeholder="Enter your Id" type="number" />
                <input ref={nameInput} className="form-control mt-4" placeholder="Enter Name" type="name" />
                <input ref={emailInput} className="form-control mt-4" placeholder="Enter Email" type="email" />
                <input ref={contactInput} className="form-control mt-4" placeholder="Enter Phone no." type="number " />
                <input ref={passwordInput} className="form-control mt-4" placeholder="Enter Password" type="password" />
                <button className="btn btn-primary mt-4 mb-5" onClick={()=>addrecord(idInput,nameInput,emailInput,contactInput,passwordInput)}>Submit</button>
            </div>
        </div>
    </>
}

export default Register