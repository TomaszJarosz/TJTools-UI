import {Drawer} from "./Drawer";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import * as React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShopSearch from "./search/Search";
import {Link} from "react-router-dom";


function ShopMenuIcon(props: { onClick: any, open: boolean }) {
    return <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={props.onClick}
        sx={{
            marginRight: "36px", ...(props.open && {display: "none"}),
        }}
    >
        <MenuIcon/>
    </IconButton>;
}

function CartIcon() {
    return <IconButton color="inherit">
        <Badge badgeContent={12} color="secondary">
            <ShoppingCartIcon/>
        </Badge>
    </IconButton>;
}

function NotificationIcon() {
    return <IconButton color="inherit">
        <Badge badgeContent={4} color="secondary">
            <NotificationsIcon/>
        </Badge>
    </IconButton>;
}

function ProfileIcon() {
    return <IconButton color="inherit">
        <Badge badgeContent={1} color="secondary">
            <AccountCircleIcon/>
        </Badge>
    </IconButton>;
}

export default function ShopAppbar(props: { open: boolean, onClick: () => void }) {
    return <Drawer position="absolute" open={props.open}>
        <Toolbar sx={{pr: "24px"}}>
            <ShopMenuIcon onClick={props.onClick} open={props.open}/>
            <Typography component="h1" variant="h6" color="inherit" noWrap sx={{flexGrow: 1}}>
                Shop App
            </Typography>
            <ShopSearch/>
            <IconButton component={Link} to="/shop/cart"><CartIcon/></IconButton>
            <IconButton component={Link} to="/shop/notifications"><NotificationIcon/></IconButton>
            <IconButton component={Link} to="/shop/profile"><ProfileIcon/></IconButton>
        </Toolbar>
    </Drawer>;
}