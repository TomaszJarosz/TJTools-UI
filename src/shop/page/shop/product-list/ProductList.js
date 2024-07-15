import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import * as React from "react";
import {useEffect} from "react";
import {fetchProducts} from "./products";
import {useQuery} from "@tanstack/react-query";
import Product from "./Product";

function ProductList() {
    console.log("Render")
    const {isError, isLoading, data, error} = useQuery(
        ["products"],
        fetchProducts,
        {staleTime: 5 * 60000}
    );

    useEffect(() => {
        console.log("Component did mount!")
    }, [])

    if (isError) {
        return (
            <div>
                <div>{error.message}</div>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div>
                <div>loading...</div>
            </div>
        );
    }

    return (
        <Container sx={{py: 8}} maxWidth="md">
            <Grid container spacing={2}>
                {data.data.map(
                    (product) => <Product key={product.id}
                                          id={product.id}
                                          name = {product.name}
                                          description = {product.description}
                                          price = {product.price}
                                          image = {product.image}
                    />
                )}
            </Grid>
        </Container>
    )
}

export default ProductList