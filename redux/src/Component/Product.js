import { useSelector } from "react-redux"

export default function Product(){
    
    const {value} = useSelector(store=>store.productlist)
    console.log(value);
    // for(let key in value){
    //     console.log(key);
    // }
    return<>
        
    </>
}