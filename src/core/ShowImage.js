import React from "react";
import { API } from "../config";

const ShowImage = ({ item, url ,height,width}) => (
    <div className="product-img">
        <img
            src={`${API}/${url}/photo/${item._id}`}
            alt={item.name}
            className="mb-3 ml-5 "
            style={{ maxHeight: height?height:"50%", maxWidth:width?width:"50%"  }}
        />
    </div>
);

export default ShowImage;
