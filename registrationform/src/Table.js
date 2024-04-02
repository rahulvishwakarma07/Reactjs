function Table(props) {
    const { datalist,deleterecord } = props
    return <>
        {/* <div className="container mt-5">
            <div className="row"> */}
                <div className="col-md-7">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Contact</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {datalist.map((data, index) => <tr key={index}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.email}</td>
                                <td>{data.phone}</td>
                                <td><button className="btn btn-primary">Edit</button></td>
                                <td><button className="btn btn-danger" onClick={()=>deleterecord(data.id)}>Remove</button></td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            {/* </div>
        </div> */}
    </>
}

export default Table