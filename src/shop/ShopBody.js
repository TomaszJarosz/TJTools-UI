import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import * as React from "react";
import Copyright from "./components/copyright/Copyright";
import {Outlet} from "react-router-dom";

export default function ShopBody() {
    return <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
        <Paper sx={{p: 2}}>
            <Outlet/>
        </Paper>
        <Copyright sx={{pt: 4}}/>
    </Container>
}