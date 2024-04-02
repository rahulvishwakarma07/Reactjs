import { Component } from "react";
import AddTask from "./Component/AddTask";
import Tabledata from "./Component/Tabledata";
import Header from "./Component/Header";

import Task from "./Task";
class App extends Component {
  constructor() {
    super();
    this.state = {
      taskList: Task,
      priorityList: [{ priorityId: 1, priorityValue: 'Low' }, { priorityId: 2, priorityValue: 'Medium' }, { priorityId: 3, priorityValue: 'High' }],
      defaultStatus: "active"
    }
  }
  addTask = (title, pid) => {
    console.log("Hii");
    // let title = this.title.value;
    // let pid = this.priority.value;
    let id = Date.now();
    let status = "active";

    let date = new Date();
    date = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

    pid *= 1;
    let newTask = { id, pid, title, status, date };
    console.log(newTask);
    console.log(typeof pid);
    this.setState({ taskList: [...this.state.taskList, newTask] });
  }
  updateStatus = (status) => {
    this.setState({ defaultStatus: status })
  }
  render() {
    return <>
      <Header />
      <AddTask taskList={this.state.taskList} defaultStatus={this.state.defaultStatus} priorityList={this.state.priorityList} updateStatus={this.updateStatus} addTask={this.addTask} />
      <Tabledata taskList={this.state.taskList} priorityList={this.state.priorityList} defaultStatus={this.state.defaultStatus} />
    </>
  }
}
export default App;