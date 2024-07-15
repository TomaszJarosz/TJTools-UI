import {Drawer} from "./Drawer";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import * as React from "react";
import {mainListItems, secondaryListItems} from "./listItems";

export default function ShopToolbar(props: { open: boolean, onClick: () => void }) {
    return <Drawer variant="permanent" open={props.open}>
        <Toolbar
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                px: [1],
            }}
        >
            <IconButton onClick={props.onClick}>
                <ChevronLeftIcon/>
            </IconButton>
        </Toolbar>
        <Divider/>
        <List component="nav">
            {mainListItems}
            <Divider sx={{my: 1}}/>
            {secondaryListItems}
        </List>
    </Drawer>;
}
