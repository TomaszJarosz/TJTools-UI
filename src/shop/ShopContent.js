import * as React from 'react';
import Box from '@mui/material/Box';
import ShopToolbar from "./sidebar/ShopToolbar";
import ShopAppbar from "./topbar/ShopAppbar";
import ShopBody from "./ShopBody";

const bodyStyle = {
    backgroundColor: (theme) =>
        theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
};

export default function ShopContent() {
    const [open, setOpen] = React.useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    return (
        <Box sx={{display: 'flex'}}>
            <ShopAppbar open={open} onClick={toggleDrawer}/>
            <ShopToolbar open={open} onClick={toggleDrawer}/>
            <Box component="main" sx={bodyStyle}>
                <ShopBody/>
            </Box>
        </Box>
    );
}
