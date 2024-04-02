import { Component } from 'react'

class Studentdata extends Component {
    render() {
        const {studentList,defaultbranch,deleterecord} = this.props
        console.log(studentList);
        return <>
            <div className='container'>
                <div className='container mt-4'>
                    <table className='table border'>
                        <thead className='border'>
                            <tr>
                                <th>S.No</th>
                                <th>Roll No.</th>
                                <th>Name</th>
                                <th>Branch</th>
                                <th>Mobile</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody className='border'>
                            {studentList.filter((student)=>student.branch===defaultbranch || defaultbranch==='all').map((data, index) => <tr key={index} >

                                <td>{index + 1}</td>
                                <td>{data.rollno}</td>
                                <td>{data.name}</td>
                                <td>{data.branch}</td>
                                <td>{data.mob}</td>
                                <td><button className='btn btn-outline-danger' onClick={() =>deleterecord(data.rollno)}>Delete</button></td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    }
}

export default Studentdata