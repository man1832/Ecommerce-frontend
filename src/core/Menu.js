import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout ,isauthenticate} from "../auth";
import {itemTotal} from './cartHelpers'
import {MDBIcon}from 'mdbreact'
const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#ff9900" };
    } else {
        return { color: "#ffffff" };
    }
};

const Menu = ({ history }) => (
    <div className="navbar fixed-top navbar-expand-lg navbar-dark pink scrolling-navbar">
            <ul className="navbar-nav mr-auto" >
            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/")}
                    to="/"
                >
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/shop")}
                    to="/shop"
                >
                    Shop
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/cart")}
                    to="/cart"
                >
                    Cart{" "}
                    <sup>
                        <small className="cart-badge">{itemTotal()}</small>
                    </sup>
                </Link>
            </li>
            {isauthenticate() && isauthenticate().user.role===1 && (
                <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/admin/dashboard")}
                    to="/admin/dashboard"
                >
                   Dashboard
                </Link>
            </li>
            
            )}
            {isauthenticate() && isauthenticate().user.role===0 && (
                <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/user/dashboard")}
                    to="/user/dashboard"
                >
                   Dashboard
                </Link>
            </li>
            )}
               {!isauthenticate() && (
                    <Fragment>
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/signin")}
                            to="/signin"
                        >
                            Signin
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/signup")}
                            to="/signup"
                        >
                            Signup
                        </Link>
                    </li>
                </Fragment>
               )}
                {isauthenticate() && (
                    <li className="nav-item">
                    <span
                        className="nav-link"
                        style={{ cursor: "pointer", color: "#ffffff" }}
                        onClick={()=>signout(()=>{
                            history.push('/');
                        })}
                        >
                        Signout
                    </span>
                </li>
                )}
        </ul>
        <ul class="navbar-nav nav-flex-icons">
        <li class="nav-item">
          <i class="fas fa-shopping-cart"></i>
        </li>
        <li class="nav-item">
          <a class="nav-link"></a>
        </li>
      </ul>
    </div>

);

export default withRouter(Menu);
