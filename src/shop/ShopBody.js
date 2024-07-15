import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import * as React from "react";
import {Outlet} from "react-router-dom";

export default function ShopBody() {
    return <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
        <Paper sx={{p: 2}}>
            <Outlet/>
        </Paper>
    </Container>
}