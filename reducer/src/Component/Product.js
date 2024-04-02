import Header from "./Header";
import { Link,Outlet } from 'react-router-dom'

export default function Product() {
    return <>
        <Header />
        <div className="container-fluid">
            <h1 className="text-center mt-2">Product Component</h1>
            <div className="container mt-5">
                <Link to=''>
                    New Product
                </Link> &nbsp;&nbsp;&nbsp;
                <Link to='featuredproduct'>
                    Featured Product
                </Link>
            </div>
            <div className="mt-5">
                <Outlet/>
            </div>
        </div>
    </>
}