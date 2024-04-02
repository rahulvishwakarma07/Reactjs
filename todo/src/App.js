// import logo from './logo.svg';
import './App.css';
import { Component } from 'react'
import Task from './Task'


class App extends Component {
  constructor() {

    super();
    this.state = {
      Tasklist: Task,
      defaultactive: 'Active'
    }
    // let date = new Date();
  }

  addnewTask = () => {
    let date = new Date();
    // window.alert(date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear())
    let currentdate = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    let newTask = { Title: this.Task.value, priority: this.priority.value, Date: currentdate, isActive: 'Active' }
    this.setState({ Tasklist: [...this.state.Tasklist, newTask] })
  }

  changeData = (no) => {

    
    // document.getElementById('activeButton').className = 'disabled';
    // document.getElementById('deactiveButton').className = 'enable';

    let value = no ? 'Deactive' : 'Active';
    this.setState({ defaultactive: value });
  }

  isActive = (Task) => {
    let updateTask = [...this.state.Tasklist];

    let index = this.state.Tasklist.findIndex(task => task.Title === Task.Title);
    let value = Task.isActive === 'Active' ? 'Deactive' : 'Active';

    updateTask[index].isActive = value;
    this.setState({ Tasklist: updateTask });
  }

  render() {
    return <>
      <div className='container-fluid bg-danger p-2'>
        <h4 className='text-center text-white'>ToDo</h4>
      </div>

      <div className='container'>
        <div className='row mt-5' >
          <div className='col-md-6'>
            <input ref={(Task) => this.Task = Task} className='form-control' placeholder='Enter Task' />
          </div>

          <div className='col-md-6'>
            <select ref={(priority) => this.priority = priority} className='form-control'>
              {/* <option>Select Priority</option> */}
              <option>Normal</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>
        </div>
        <button className='btn btn-secondary mt-4' onClick={this.addnewTask}>Add Task</button>

        <div className='row mt-4'>
          <div className='col-md-12'>
            <button className='btn btn-primary' id='activeButton' onClick={() => this.changeData(0)} >Active:({this.state.Tasklist.filter((task) => task.isActive === 'Active').length})</button>
            <button className='btn btn-danger ms-4' id='deactiveButton' onClick={() => this.changeData(1)}>Deactive:({this.state.Tasklist.filter((task) => task.isActive === 'Deactive').length})</button>
          </div>
        </div>
      </div>
      <div className='container mt-5'>
        <table className='table border'>
          <thead className='border'>
            <tr>
              <th>S.no</th>
              <th>Title</th>
              <th>Date</th>
              <th>Priority</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {(this.state.Tasklist.filter((Task) => Task.isActive === this.state.defaultactive)).map((Task, index) => <tr key={index} className={Task.priority === 'Normal' ? 'bg-info opacity-50' : Task.priority === 'Medium' ? 'bg-warning opacity-50' : 'bg-danger opacity-25'}>
              <td>{index + 1}</td>
              <td>{Task.Title}</td>
              <td>{Task.Date}</td>
              <td>{Task.priority}</td>
              <td><button onClick={() => this.isActive({ ...Task })} className={Task.isActive === 'Active' ? 'btn btn-danger' : 'btn btn-primary'}>{Task.isActive === 'Active' ? 'Deactive' : 'Active'}</button></td>
            </tr>)}
          </tbody>
        </table>
      </div >
    </>
  }
}

export default App;
