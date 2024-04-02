import { Component } from "react";

class AddTask extends Component {
    render() {
        let { priorityList, taskList, addTask, updateStatus, defaultStatus } = this.props;
        return <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <input ref={(titleInput) => this.title = titleInput} type='text' placeholder='Task title' className="form-control" />
                    </div>
                    <div className="col-md-6">
                        <select ref={(priorityInput) => this.priority = priorityInput} className="form-control">
                            {priorityList.map((priorityObj, index) => <option key={index} value={priorityObj.priorityId}>{priorityObj.priorityValue}</option>)}
                        </select>
                    </div>
                    <div className="col-12 mt-3">
                        <button onClick={() => addTask(this.title.value, this.priority.value)} className="btn btn-success">ADD</button>

                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12">
                        <button disabled={defaultStatus === 'active' ? true : false} onClick={() => updateStatus('active')} className="btn btn-info">Active ({taskList.filter((task) => task.status === 'active').length})</button>
                        <button disabled={defaultStatus === 'deactive' ? true : false} onClick={() => updateStatus("deactive")} className="btn btn-warning ms-2">Deactive ({taskList.filter((task) => task.status === "deactive").length})</button>
                    </div>
                </div>
            </div>

        </>
    }
}

export default AddTask