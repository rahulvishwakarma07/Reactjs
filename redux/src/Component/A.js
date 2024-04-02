import { useSelector } from "react-redux"

const A=()=>{
  const {a} = useSelector((store)=>store.data)

    return <>
        <h4>A Component...{a}</h4>
    </>
}

export default A