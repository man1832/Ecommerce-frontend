import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import {getProducts }from './apiCore';
import Card from './Card'
import Footers from './Footers'
import Search from './Search'
import "../styles.css"
import footers from './Footers';
const Home = () => {
    const [productsBySell, setProductsBySell] = useState([]);
    const [productsByArrival, setProductsByArrival] = useState([]);
    const [error, setError] = useState(false);

    const loadProductsBySell = () => {
        getProducts('sold').then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProductsBySell(data);
            }
        });
    };

    const loadProductsByArrival = () => {
        getProducts('createdAt').then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProductsByArrival(data);
            }
        });
    };

    useEffect(() => {
        loadProductsByArrival();
        loadProductsBySell();
    }, []);
    return (
        <div className="container-fluid  pr-5 cyan-skin">
            <Search/>
            <div className="row mb-4 ml-3 mr-3 t1 dusty-grass-gradient">
                <div className="col-lg-4 m-auto ">
                        <h4 style={{fontFamily:"lato",fontWeight:"4000"}} className="animated zoomIn infinite">New Arrivals</h4>
                </div>
            </div>
                
            <div className="row my-4">
                {productsByArrival.map((product, i) => (
                    <div key={i} className="col-lg-4 col-md-12">
                        <Card product={product} />
                    </div>
                ))}
            </div>
            <div className="row mb-4 ml-4 mr-3 t1 dusty-grass-gradient">
                <div className="col-lg-4 m-auto">
                        <h4 style={{fontFamily:"lato",fontWeight:"4000"}} className="animated zoomIn infinite">Best Sellers</h4>
                </div>
            </div>
            <div className="row">
                {productsBySell.map((product, i) => (
                    <div key={i} className="col-lg-4 col-md-12">
                        <Card product={product} />
                    </div>
                ))}
            </div>
            <Footers />
        </div>
    );
};

export default Home;
