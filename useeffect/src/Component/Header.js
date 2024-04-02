import { Link } from "react-router-dom"

export default () => {
    return <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                {/* <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to='/' >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/about'>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/contact' >Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/gallery' >Gallery</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/portfolio'>Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/products'>Products</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}