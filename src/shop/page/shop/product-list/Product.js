import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import * as React from "react";

function Product({id, name, description, price, image} ) {
    return <Grid item xs={12} sm={6} md={4}>
        <Card sx={{height: "100%", display: "flex", flexDirection: "column"}}>
            <CardMedia component="img"
                       image={image}
                       alt={name}
            />
            <CardContent sx={{flexGrow: 1}}>
                <Typography gutterBottom variant="h5" component="h2">
                    {name}
                </Typography>
                <Typography>
                    {description}
                </Typography>
                <Typography variant="h5" component="h3">
                    {price} zł
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">View</Button>
                <Button size="small">Add to Cart</Button>
            </CardActions>
        </Card>
    </Grid>;
}

export default Product