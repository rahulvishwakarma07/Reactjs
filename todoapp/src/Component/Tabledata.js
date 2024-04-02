import { Component } from "react";

class Tabledata extends Component {
    render() {
        let { taskList, priorityList, defaultStatus } = this.props;
        return <>
            <div className="container mt-3">
                <table className="table">
                    <thead>
                        <tr>
                            <th>S.no</th>
                            <th>Title</th>
                            <th>Created Date</th>
                            <th>Priority</th>
                            <th>Change Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {taskList.filter((task) => task.status === defaultStatus).map((task, index) => <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{task.title}</td>
                            <td>{task.date}</td>
                            <td>{priorityList.find(priorityObj => priorityObj.priorityId === task.pid).priorityValue}</td>
                            <td><button className="btn btn-danger">Deactive</button></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </>
    }
}

export default Tabledata

// .sort((a,b)=>{
//     return a.pid < b.pid ? 1 : -1;
//    })