import axios from "axios";

export const fetchProducts = async () => {
    console.log("Fetching products");

    const products = await axios.get(
        "http://localhost:8080/api/product",
        {headers: headers}
    )
    console.log("Products: ", products)
    return products;
};

const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
};