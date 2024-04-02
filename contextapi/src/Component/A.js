import { useContext } from "react"
import B from "./B"
import {  NameCon } from "../App"

const A=()=>{
    const {data} = useContext(NameCon)
    return<>
        <h3>A Component...{data}</h3>
        <B/>
    </>
}

export default A