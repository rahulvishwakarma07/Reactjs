import { useContext } from "react"
import C from "./C"
import {  NameCon } from "../App"

const B=()=>{
    const {data} = useContext(NameCon)
    return <>
        <h3>B Component...{data}</h3>
        <C/>
    </>
}

export default B