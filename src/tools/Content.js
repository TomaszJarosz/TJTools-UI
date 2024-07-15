import * as React from 'react';
import Box from '@mui/material/Box';
import Body from "./Body";

const bodyStyle = {
    backgroundColor: (theme) =>
        theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
};

export default function Content() {
    return (
        <Box sx={{display: 'flex'}}>
            <Box component="main" sx={bodyStyle}>
                <Body/>
            </Box>
        </Box>
    );
}
