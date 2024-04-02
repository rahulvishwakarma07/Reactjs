import { Component } from "react"

export default class InputValue extends Component{
    render(){
        const {studentlist , addstudentrecord,updatebranch} = this.props;
        return<>
            <div className='container'>
        <div className='row mt-5'>
          <div className='col-md-6'>
            <input ref={(rollInput) => this.rollno = rollInput} className='form-control' placeholder='Enter roll no. ' />
          </div>
          <div className='col-md-6'>
            <input ref={(nameInput) => this.name = nameInput} className='form-control' placeholder='Enter Name ' />
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-md-6'>
            <select ref={(branchInput) => this.branch = branchInput} className='form-control'>
              <option>Select branch</option>
              <option value={'IT'}>IT</option>
              <option value={'CS'}>CS</option>
              <option value={'MECH'}>MECH</option>
              <option value={'EC'}>EC</option>
            </select>
          </div>
          <div className='col-md-6'>
            <input ref={(mobileInput) => this.mob = mobileInput} className='form-control' placeholder='Enter Mobile no. ' />
          </div>
        </div>

        <div className='row mt-4'>
          <div className='col-md-6'>
            <button className='btn btn-primary' onClick={()=>addstudentrecord(this.rollno.value , this.name.value , this.branch.value , this.mob.value)}>ADD</button>
          </div>

          <div className='col-md-6'>
            <button onClick={()=>updatebranch('CS')} className="btn btn-primary ms-2">CS : ({studentlist.filter((student) => student.branch === "CS").length})</button>

            <button onClick={()=>updatebranch('IT')} className="btn btn-danger ms-2">IT : ({studentlist.filter((student) => student.branch === "IT").length})</button>

            <button onClick={()=>updatebranch('EC')} className="btn btn-info ms-2">EC : ({studentlist.filter((student) => student.branch === "EC").length})</button>

            <button onClick={()=>updatebranch('MECH')} className="btn btn-warning ms-2">MECH : ({studentlist.filter((student) => student.branch === "MECH").length})</button>

            <button onClick={()=>updatebranch('all')} className="btn btn-outline-success ms-2">Total : ({studentlist.length})</button>
          </div>
        </div>
        </div>
        </>
    }
}