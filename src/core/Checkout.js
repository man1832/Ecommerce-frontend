import React, { useState, useEffect } from 'react';
import { getProducts,createOrder } from './apiCore';
import { emptyCart } from './cartHelpers';
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
            <Link to="/">
            <button className="btn btn-success btn-block" onClick={()=>emptyCart(()=>{})}
             >
               Place Order
            </button>
            </Link>
        ) : (
            <Link to="/signin">
                <button className="btn btn-primary">Sign in to checkout</button>
            </Link>
        );
    };

    // const showSuccess = () => {
    //     return !isauthenticate() ?
    //     <div className="alert alert-info" >
            
            
    //     </div>
    // }
    return (
        <div>
            <h2>Total: <i class="fa fa-inr"></i> {getTotal()}</h2>
            {/* {showSuccess()} */}
            {showCheckout()}
        </div>
    );
};

export default Checkout;
