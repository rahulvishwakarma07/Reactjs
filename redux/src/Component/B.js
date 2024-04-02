import { useDispatch, useSelector } from "react-redux"
import { incrementcounter, incrementevencounter, incrementoddcounter, resetcounter } from "../Redux/Counterslice"

const B=()=>{
    const {b} = useSelector((store)=>store.data)
    const dispatch = useDispatch()
    const {Counter,evenCounter,oddCounter} = useSelector((store)=>store.Counter)
    return <>
        <h4>B Component...{b}</h4>
        <button onClick={()=>dispatch(incrementcounter())} className="btn btn-success">Counter {Counter}</button>
        <button onClick={()=>dispatch(incrementevencounter())} className="btn btn-primary ms-2">EvenCounter {evenCounter}</button>
        <button onClick={()=>dispatch(incrementoddcounter())} className="btn btn-danger ms-2">OddCounter {oddCounter}</button>
        <button onClick={()=>dispatch(resetcounter())} className="btn btn-warning ms-2">Reset</button>
    </>
}

export default B