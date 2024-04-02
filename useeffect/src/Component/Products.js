import { useEffect, useState } from "react";
import axios from "axios";

export default function Products() {
  const [product, setProduct] = useState([]);
  // const [showEditForm, setShowEditForm] = useState(false);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setProduct(response.data.products);
    }).catch(err => {
      console.log(err);
    });
  }, []);

  const deleteProduct = (title) => {
    const updatedProducts = product.filter((product) => product.title !== title);
    setProduct(updatedProducts);
  }

  let editproduct =()=>{
    alert("hi")
      document.getElementById('productlist').style.display = 'none'
      document.getElementById('edit').style.display = 'block'
  }
  let updateStatus = ()=>{
    document.getElementById('productlist').style.display = 'block'
      document.getElementById('edit').style.display = 'none'
  }

  return (
    <>
      <div className='container-fluid' id="productlist">
        <table className="table">
          <thead>
            <tr>
              <th>S.no</th>
              <th>Title</th>
              <th>Brand</th>
              <th>Image</th>
              <th>Price</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {product.map((pro, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{pro.title}</td>
                <td>{pro.brand}</td>
                <td><img src={pro.thumbnail} alt="Product Thumbnail" width='80' height='80' /></td>
                <td>{pro.price}</td>
                <td><button className="btn btn-outline-danger" onClick={() => deleteProduct(pro.title)}>Remove</button></td>
                <td><button className="btn btn-outline-success" onClick={editproduct}>Edit</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='container-fluid' id="edit">
        <div className="row d-flex justify-content-center align-content-center">
          <div className="col-md-6 border p-0 rounded">
            <h1 className="text-white text-center bg-danger p-2 rounded-top">Update Product Detail</h1>
            <div className="container">
              <input className="form-control mt-4" placeholder="New Product name" />
              <input className="form-control mt-4" placeholder="New Brand" />
              <input className="form-control mt-4" placeholder="New Price" />
              <center><button onClick={updateStatus} className="btn btn-success mt-4 mb-4 ">Submit</button></center>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
