import { useReducer } from "react"
import { Link, Outlet } from "react-router-dom";

function Product() {
    const [counter, dispatch] = useReducer((state, action) => {
        switch (action) {
            case "increment": state = state + 1
                return state
                break;
            case "decrement": state = state - 1
                return state
                break;
            case "reset": state = 100
                return state

        }
    }, 100)
    return <>
        <div className="container-fluid">
            <h1>{counter}</h1>
        </div>
        <div className="container-fluid">
            <button onClick={() => dispatch('increment')} className="btn btn-success">Increment</button>
            <button onClick={() => dispatch('decrement')} className="btn btn-danger ms-2">Decrement</button>
            <button onClick={() => dispatch('reset')} className="btn btn-info ms-2">Reset</button>
            <Link to='productlist'><button className="btn btn-secondary ms-2">Productlist</button></Link>
        </div>
        <Outlet/>
    </>
}

export default Product