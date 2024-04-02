import { useContext } from "react"
import {  NameCon } from "../App";

const C=()=>{
    const {data} = useContext(NameCon);
    return <>
        <h3>C Component...{data}</h3>
        
    </>
}

export default C