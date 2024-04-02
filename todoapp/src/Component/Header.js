import { Component } from "react";

class Header extends Component {
    render() {
        return <>
            <div style={{ height: '50px' }} className="bg-danger d-flex align-items-center justify-content-center">
                <h5 className="text-white text-center">ToDoApp</h5>
            </div>
        </>
    }
}

export default Header