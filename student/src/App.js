import Inputvalue from './Inputvalue';
import student from './studentRecord'
import { Component } from 'react'
import Studentdata from './studentdata';


class Student extends Component {
  constructor() {
    super();
    this.state = {
      studentlist: student,
      defaultbranch: 'all'
    }
  }

  addstudentrecord = (rollno, name, branch, mob) => {
    let newstudent = { rollno, name, branch, mob }
    this.setState({ studentlist: [...this.state.studentlist, newstudent] });
    // window.alert("called");
  }

  deleterecord = (rollno) => {
    let index = this.state.studentlist.findIndex((student) => student.rollno == rollno);
    this.state.studentlist.splice(index, 1);
    this.setState({ studentList: [...this.state.studentlist] });
    // window.alert(index)
  }

  updatebranch = (branch) => {
    console.log(branch);
    this.setState({ defaultbranch: branch });
  }

  render() {
    return <>
      <Inputvalue studentlist={this.state.studentlist} addstudentrecord={this.addstudentrecord} updatebranch={this.updatebranch} />
      <Studentdata studentList={this.state.studentlist} defaultbranch={this.state.defaultbranch} deleterecord={this.deleterecord}/>
    </>
  }
}

export default Student