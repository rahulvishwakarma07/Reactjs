import Addstudent from './Component/Addstudent'
import Header from './Component/Header'
import Table from './Component/Table'
import studentlist from './Data'
import {useRef, useState} from 'react'

function App() {
  const [student,setstudent] = useState(studentlist)
  const [defaultbranch, setbranch] = useState('all')

  
  let addstudent=(rollInput , nameInput , branchInput , mobileInput)=>{
      let rollno = rollInput.current.value
      let name = nameInput.current.value
      let branch = branchInput.current.value
      let mob = mobileInput.current.value
      let newstudent = {rollno,name,branch,mob}
      let updatestudent = [...student,newstudent]
      setstudent(updatestudent)
  }

  let updatebranch =(branch)=>{
      setbranch(branch)
  }

  let deleterecord =(rollno)=>{
    let index = student.findIndex((rollInput)=>{return rollInput.rollno===rollno})
    student.splice(index,1)
    setstudent(student)
  }

  return <>
          <Header/>
          <Addstudent addstudent={addstudent} updatebranch={updatebranch} studentlist={student}/>
          <Table studentlist={student} defaultbranch={defaultbranch} deleterecord={deleterecord}/>
          
  </>
}

export default App