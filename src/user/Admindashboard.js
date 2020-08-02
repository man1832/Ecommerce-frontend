import React from "react"
import {isauthenticate} from '../auth/index'
import {Link} from 'react-router-dom'
const Admindashboard=()=>{
    const {user:{_id,name,email,role}}=isauthenticate()
    const Adminlinks=()=>{
        return(
            <div className="card mb-5 mt-5">
            <h3 className="card-header">
                Category
            </h3>
            <ul className="list-group">
                <li className="list-group-item"><Link className="nav-link" to="/create/category">Create Category</Link></li>
                <li className="list-group-item"><Link className="nav-link" to="/create/product">Create Product</Link> </li>
            </ul>
        </div>
        )
    }
const Personaldetails=()=>{
    return(
        <div className="card mb-5 mt-5">
        <h3 className="card-header">
            Admin Information
        </h3>
        <ul className="list-group">
            <li className="list-group-item ">Name:{name}</li>
            <li className="list-group-item ">Email:{email}</li>
            <li className="list-group-item ">Role:{role===1 ?'Admin':'Customer'}</li>
        </ul>
    </div>
    )
}
    return(
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-3">
                        {Adminlinks()}
                    </div>
                    <div className="col-lg-9">
                        {Personaldetails()}
                    </div>

                </div>
            </div>
    )

}
export default Admindashboard;