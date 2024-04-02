import datalist from './Data'
import { useState } from 'react'
import Header from './Header'
import Table from './Table'
import Register from './Register'

function App() {

  const [data, setdata] = useState(datalist)

  let addrecord=(idInput,nameInput,emailInput,contactInput,passwordInput)=>{
    console.log("Hello");
    let id = idInput.current.value;
    let name = nameInput.current.value;
    let email = emailInput.current.value;
    let contact = contactInput.current.value;
    let password = passwordInput.current.value;

    let newrecord = {id,name,email,contact,password}
    let updatedata = [...data,newrecord]
    setdata(updatedata)
  }

  let deleterecord=(id)=>{
    let index = data.findIndex((idInput)=>{return idInput.id===id})
    console.log(index);
    data.splice(index,1)
    setdata(data);
  }

  return <>
    <Header />
    <div className='container mt-5'>
      <div className='row'>
        <Table datalist={data}  deleterecord={deleterecord}/>
        <Register addrecord={addrecord}/>
      </div>
    </div>
  </>
}

export default App