import {shopDescription} from "../shop-title/post";
import React from "react";
import ProductList from "../product-list/ProductList";
import ShopTitle from "../shop-title/ShopTitle";

function ShopMain(){
    return(<>
        <ShopTitle post={shopDescription}/>
        <ProductList/>
    </>
    )
}

export default ShopMain