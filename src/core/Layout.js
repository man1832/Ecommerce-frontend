import React from "react";
import Menu from './Menu'
import Footers from "./Footers";
const Layout = ({
    title,
    description,
    className,
    children
}) => (
          
    <div>
        <div className="jumbotron dusty-grass-gradient bd mt-5">
            <h2>{title}</h2>
            <p className="lead animated zoomIn">{description}</p>
        </div>
        <div className={className}>{children}</div>
    </div>
    
);

export default Layout;
