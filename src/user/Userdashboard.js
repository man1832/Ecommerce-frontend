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
const PurchaseHistory=()=>{
    return(
        <div className="card mt-5 h-3">
                    <h3 className="card-header">
                        Purchase Information
                    </h3>
                    <ul className="list-group">
                        <li className="list-group-item">
                            history
                        </li>
                    </ul>
                </div>
    )
}
    return(
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        {Userlinks()}
                    </div>
                    <div className="col-9">
                        {Personaldetails()}
                        {/* {PurchaseHistory()} */}
                    </div>

                </div>
            </div>
    )

}
export default Userdashboard;