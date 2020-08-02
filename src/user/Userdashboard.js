import React from "react"
import {isauthenticate} from '../auth/index'
import {Link} from 'react-router-dom'
const Userdashboard=()=>{
    const {user:{_id,name,email,role}}=isauthenticate()
    const Userlinks=()=>{
        return(
            <div className="card mb-5 mt-5">
            <h3 className="card-header">
                User Information
            </h3>
            <ul className="list-group">
                <li className="list-group-item"><Link className="nav-link" to="/cart">My Cart</Link></li>
                <li className="list-group-item"><Link className="nav-link" to="/">Profile Update</Link> </li>
            </ul>
        </div>
        )
    }
const Personaldetails=()=>{
    return(
        <div className="card mb-5 mt-5">
        <h3 className="card-header">
            User Information
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
                        {Userlinks()}
                    </div>
                    <div className="col-lg-9">
                        {Personaldetails()}

                    </div>

                </div>
            </div>
    )

}
export default Userdashboard;