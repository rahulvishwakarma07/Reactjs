
import { useRef } from "react"

function Addstudent(props) {
  let rollInput = useRef(null);
  let nameInput = useRef(null);
  let branchInput = useRef(null);
  let mobileInput = useRef(null);

  const { updatebranch, addstudent, studentlist } = props
  return <>
    <div className='container'>
      <div className='row mt-5'>
        <div className='col-md-6'>
          <input ref={rollInput} className='form-control' placeholder='Enter roll no. ' />
        </div>
        <div className='col-md-6'>
          <input ref={nameInput} className='form-control' placeholder='Enter Name ' />
        </div>
      </div>
      <div className='row mt-5'>
        <div className='col-md-6'>
          <select ref={branchInput} className='form-control'>
            <option>Select branch</option>
            <option value={'IT'}>IT</option>
            <option value={'CS'}>CS</option>
            <option value={'MECH'}>MECH</option>
            <option value={'EC'}>EC</option>
          </select>
        </div>
        <div className='col-md-6'>
          <input ref={mobileInput} className='form-control' placeholder='Enter Mobile no. ' />
        </div>
      </div>

      <div className='row mt-4'>
        <div className='col-md-6'>
          <button className='btn btn-primary' onClick={() => addstudent(rollInput, nameInput, branchInput, mobileInput)}>ADD</button>
        </div>

        <div className='col-md-6'>
          <button onClick={() => updatebranch('CS')} className="btn btn-primary ms-2">CS : ({studentlist.filter((student) => student.branch === "CS").length})</button>

          <button onClick={() => updatebranch('IT')} className="btn btn-danger ms-2">IT : ({studentlist.filter((student) => student.branch === "IT").length})</button>

          <button onClick={() => updatebranch('EC')} className="btn btn-info ms-2">EC : ({studentlist.filter((student) => student.branch === "EC").length})</button>

          <button onClick={() => updatebranch('MECH')} className="btn btn-warning ms-2">MECH : ({studentlist.filter((student) => student.branch === "MECH").length})</button>

          <button onClick={() => updatebranch('all')} className="btn btn-outline-success ms-2">Total : ({studentlist.length})</button>
        </div>
      </div>
    </div>
  </>
}


export default Addstudent