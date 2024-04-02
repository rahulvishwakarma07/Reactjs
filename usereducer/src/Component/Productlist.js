import axios from "axios"
import { useEffect, useReducer } from "react"

function Productlist() {
    const [product, dispatch] = useReducer((product, action) => {
        if (action.type === 'setproductlist') {
            return { ...product, productlist: action.payload };
        }
        else if (action.type === 'delete') {
            product.productlist.splice(action.payload, 1)
        }
        return { ...product }
    }, { productlist: [] })

    useEffect(() => {
        axios.get('https://dummyjson.com/products')
            .then(response => {
                console.log(response.data.products);
                dispatch({ type: 'setproductlist', payload: response.data.products })
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return <>
        <h1>Productlist Component</h1>
        <table className="table">
            <thead>
                <tr>
                    <th>S.no</th>
                    <th>Title</th>
                    <th>Brand</th>
                    <th>Price</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {product.productlist.map((item, index) => <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.brand}</td>
                    <td>{item.price}</td>
                    <td><button onClick={() => dispatch({ type: 'delete', payload: index })} className="btn btn-outline-danger">Delete</button></td>
                </tr>)}
            </tbody>
        </table>
    </>
}

export default Productlist