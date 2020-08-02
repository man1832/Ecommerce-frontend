import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { read, listRelated } from './apiCore';
import Card from './Card';

const Product = props => {
    const [product, setProduct] = useState({});
    const [relatedProduct, setRelatedProduct] = useState([]);
    const [error, setError] = useState(false);

    const loadSingleProduct = productId => {
        read(productId).then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProduct(data);
                // fetch related products
                listRelated(data._id).then(data => {
                    if (data.error) {
                        setError(data.error);
                    } else {
                        setRelatedProduct(data);
                    }
                });
            }
        });
    };

    useEffect(() => {
        const productId = props.match.params.productId;
        loadSingleProduct(productId);
    }, [props]);

    return (
        <Layout
            title={product && product.name}
            description=" "
            className="container-fluid"
        >
            <div className="row">
                <div className="col-lg-8 ml-auto">
                    {product && product.description && <Card product={product} showViewProductButton={false} />}
                </div>
            </div>
            <div className="row mb-4 ml-3 mr-3 mt-3 t1 dusty-grass-gradient">
                <div className="col-4 m-auto ">
                        <h4 style={{fontFamily:"lato",fontWeight:"4000"}} className="animated zoomIn infinite">Related products</h4>
                </div>
            </div>
            <div className="row my-4">
                    {relatedProduct.map((p, i) => (
                        <div className="col-lg-4 col-md-12" key={i}>
                            <Card product={p} />
                        </div>
                    ))}
            </div>
        </Layout>
    );
};

export default Product;
