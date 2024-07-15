import * as React from 'react';
import Box from '@mui/material/Box';
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
    return (
        <Box sx={{display: 'flex'}}>
            <Box component="main" sx={bodyStyle}>
                <ShopBody/>
            </Box>
        </Box>
    );
}
