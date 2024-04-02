import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchcategory } from "../Redux/Categoryslice";


const Category = () => {
    const {categoryList} = useSelector((store)=>store.Category)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchcategory());
    },[])
    console.log(categoryList);
    return <>
        <table className="table">
            <thead>
                <tr>
                    <th>S.no</th>
                    <th>CategoryName</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {categoryList?.map((category,index)=><tr key={index}>
                    <td>{index+1}</td>
                    <td>{category}</td>
                    <td className="btn btn-outline-danger">Delete</td>
                </tr>)}
            </tbody>
        </table>
    </>
}

export default Category