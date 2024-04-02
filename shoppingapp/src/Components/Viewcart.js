import { useEffect, useState } from "react"
import Header from "./Header"
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default () => {
    const [cartItemList, setCartItemList] = useState([]);
    let [totalamount, settotalamount] = useState(0);
    const navigate = useNavigate();
    useEffect(() => {
        let userId = sessionStorage.getItem("user_id");
        axios.post("http://localhost:3000/cart/viewcartitems", { userId })
            .then(response => {
                for (let product of response.data.data) {
                    product.qty = 1;
                    totalamount = totalamount + product["products.price"];
                    cartItemList.push(product);
                }
                setCartItemList([...cartItemList]);
                settotalamount(totalamount);
            }).catch(err => {
                console.log(err);
            })
    }, []);
    const updateQty = (index, value) => {
        let product = cartItemList[index];
        product.qty = value;
        totalamount = 0;


        cartItemList.splice(index, 1);
        cartItemList.splice(index, 0, product);
        setCartItemList([...cartItemList]);
        for (let productItem of cartItemList) {
            totalamount = totalamount + productItem["products.price"] * productItem.qty;
        }
        settotalamount(totalamount);
    }
    const removeFromCart = (index, productId) => {
        if (window.confirm("Are you sure ?")) {
            let userId = sessionStorage.getItem("user_id");
            axios.delete(`http://localhost:3000/cart/remove-from-cart/${userId}/${productId}`)
                .then(response => {
                    toast.info(response.data.message);
                    cartItemList.splice(index, 1);
                    setCartItemList([...cartItemList]);
                })
                .catch(err => {
                    toast.error("Oops! something went wrong...");
                });
        }
    }

    return <>
        <ToastContainer />
        <Header />
        <div className="container mt-5 ">
            <div className="row">
                <div className="col-md-8" >
                    <table className="table  text-center " style={{ boxShadow: '0 0 2px 2px gray' }}>
                        <thead className="bg-dark text-center text-white">
                            <tr>
                                <th>S.no</th> 
                                <th>Title</th>
                                <th>Brand</th>
                                <th>Price</th> 
                                <th>Quantity</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItemList.map((product, index) => <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{product["products.title"]}</td>
                                <td>{product["products.brand"]}</td>
                                <td>{product["products.price"]}</td>
                                <td><input type="number" min={1} onClick={(event) => updateQty(index, event.target.value)} defaultValue={1} style={{ width: '50px', height: '30px' }} /></td>
                                <td onClick={() => removeFromCart(index, product["products.id"])}>{<i className="fa-solid fa-trash"></i>}</td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
                <div className="col-md-3 ms-5">
                    <div className="container border d-flex flex-column p-3" style={{ boxShadow: '0 0 5px 5px gray' }}>
                        <h5 className="text-center fw-bold mb-2">Order summary</h5>
                        <label className="fw-bold m-3">Item purchased : <span className="text-success">{cartItemList.length}</span></label>
                        <label className="fw-bold ms-3">Total Amount : {totalamount}</label>
                        <button className="btn btn-dark mt-3 fw-bold" onClick={navigate("/paymentform")}>Checkout</button>
                    </div>  
                </div>
            </div>
        </div>

    </>
}

