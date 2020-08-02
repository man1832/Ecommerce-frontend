import React, { useState, useEffect } from 'react';
import { getProducts,createOrder } from './apiCore';
import { emptyCart} from './cartHelpers';
import Card from './Card';
import { isauthenticate } from '../auth/index';
import { Link, Redirect } from 'react-router-dom';

const Checkout = ({ products, setRun = f => f, run = undefined }) => {
    const [data, setData] = useState({
        loading: false,
        success: false,
        clientToken: null,
        error: '',
        instance: {},
        address: ''
    });

    const userId = isauthenticate() && isauthenticate().user._id;
    const token = isauthenticate() && isauthenticate().token;

    const handleAddress = event => {
        setData({ ...data, address: event.target.value });
    };

    const getTotal = () => {
        return products.reduce((currentValue, nextValue) => {
            return currentValue + nextValue.count * nextValue.price;
        }, 0);
    };

    const showCheckout = () => {
        return isauthenticate() ? (
        <form>
            <div className="form-group">
                <label className="text-muted">Name:</label>
                <input
                    type="text"
                    className="form-control"
                />
            </div>
            <div className="form-group">
            <label className="text-muted">Email:</label>
            <input
                type="email"
                className="form-control"
            />
        </div>

        <div className="form-group">
            <label className="text-muted">Address:</label>
            <textarea
                type="textarea" row="4"
                className="form-control"
            />
        </div>
            <Link to="/placed">
            <button className="btn btn-success btn-block" onClick={()=>emptyCart(()=>{})}
             >
               Place Order
            </button>
            </Link>
            </form>
        ) : (
            <Link to="/signin">
                <button className="btn btn-primary">Sign in to checkout</button>
            </Link>
        );
    };

    return (
        <div className="col-10 ml-2">
            <h2>Total: <i class="fa fa-inr"></i> {getTotal()}</h2>
            {/* {showSuccess()} */}
            {showCheckout()}
        </div>
    );
};

export default Checkout;
